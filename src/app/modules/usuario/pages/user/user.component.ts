import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import { UserConstants } from '../../user-constants';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  public modeAdd = false;
  private idUser: number = null;

  loading = false;
  hide = true;

  userForm!: FormGroup;

  private suscripciones: Subscription = new Subscription();

  public selectActive = [{value: true, description: 'Yes'}, {value: false, description: 'No'}];


  constructor(private readonly userServive: UserService,
    public readonly constants: UserConstants,
    private readonly route: ActivatedRoute,
    private fb: FormBuilder,
    private readonly location: Location
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
      name: ['',Validators.required],
      surnames: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      age: [null, Validators.required],
      active: [false, Validators.required],
      lastLoggin: [{value:'',disabled:true},],
      creationDate: [{value:'',disabled:true}, !this.modeAdd ? Validators.required : Validators.nullValidator]
    });

    !this.modeAdd ? this.getUser() : null;
    console.log(this.modeAdd)
  }

  private getUser(): void {
    this.userServive.getUserById(this.idUser).subscribe(
      res => {
        this.userForm.patchValue(res);
      }
    )
  }

  submit() {
    console.log(this.userForm)
    if (this.userForm.valid) {
      this.modeAdd ? this.createUser() : this.editUser();
    }    
  }

  private createUser() {
    const user: User = this.userForm.value;
    console.log(user);
    this.loading = false;
  }

  private editUser() {
    const user: User = this.userForm.value;
    console.log(user);
    this.loading = false;
  }

  public cancel() {
    this.location.back();
  }

}
