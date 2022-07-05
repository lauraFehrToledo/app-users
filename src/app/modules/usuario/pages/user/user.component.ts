import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import { UserConstants } from '../../user-constants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  public modeAdd = false;
  private idUser: number = null;

  hide = true;

  userForm!: FormGroup;

  private suscripciones: Subscription = new Subscription();

  public selectActive = [{value: true, description: 'Yes'}, {value: false, description: 'No'}];
  numberRegEx = /^[0-9]*$/;
  stringRegEx = /^[a-zA-Z ]*$/;

  constructor(private readonly userServive: UserService,
    public readonly constants: UserConstants,
    private readonly route: ActivatedRoute,
    private fb: FormBuilder,
    private readonly location: Location,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  ngOnDestroy(): void {
    this.suscripciones.unsubscribe();
  }

  private loadConfig(): void {
    this.idUser = this.route.snapshot.params['id'];
    this.modeAdd = !this.idUser;

    this.userForm = this.fb.group({
      idUser: ['', !this.modeAdd ? Validators.required : Validators.nullValidator],
      username: ['', Validators.required],
      name: ['', [Validators.required, Validators.pattern(this.stringRegEx)]],
      surnames: ['', [Validators.required, Validators.pattern(this.stringRegEx)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      age: [null, [Validators.required, Validators.pattern(this.numberRegEx)]],
      active: [false, Validators.required],
      lastLoggin: [{value:'',disabled:true},],
      creationDate: [{value:'',disabled:true}, !this.modeAdd ? Validators.required : Validators.nullValidator]
    });

    !this.modeAdd ? this.getUser() : null;
  }

  private getUser(): void {
    const sus = this.userServive.getUserById(this.idUser).subscribe(
      res => {
        this.userForm.patchValue(res);
      }, error => {
        this._snackBar.open('Failed to fetch user', '', { duration: 5000 });
      }
    )
    this.suscripciones.add(sus);

  }

  submit() {
    if (this.userForm.valid) {
      this.modeAdd ? this.createUser() : this.editUser();
    }    
  }

  private createUser() {
    const user: User = this.userForm.value;
    const sus = this.userServive.createUser(user).subscribe(
      res => {
        this._snackBar.open('User created successfully', '', { duration: 5000 });
        this.cancel();
      }, error => {
          this._snackBar.open('Error: Failed to create user.', '', { duration: 5000 });        
      }      
    );
    this.suscripciones.add(sus);    
  }

  private editUser() {
    const user: User = this.userForm.value;
    const sus = this.userServive.editUser(user).subscribe(
      res => {
        this._snackBar.open('User edited successfully', '', { duration: 5000 });
        this.cancel();
      }, error => {
          this._snackBar.open('Error: Failed to edit user.', '', { duration: 5000 });        
      } 
    );
    this.suscripciones.add(sus);
  }

  public cancel() {
    this.location.back();
  }

}
