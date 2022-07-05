import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { environment } from 'src/environments/environment';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import { UserConstants } from '../../user-constants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consult-users',
  templateUrl: './consult-users.component.html',
  styleUrls: ['./consult-users.component.scss']
})
export class ConsultUsersComponent implements OnInit, OnDestroy {

  public usersList: Array<User>;
  public displayedColumns: string[] = ['username', 'name', 'surnames', 'active','actions'];

  private suscripciones: Subscription = new Subscription();

  constructor(private userService: UserService,
    public readonly constants: UserConstants,
    private readonly location: Location,
    private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  reload() {
    this.getUsersList();
  }

  ngOnDestroy(): void {
    this.suscripciones.unsubscribe();
  }

  private getUsersList() {
    const sus = this.userService.getUsers().subscribe( 
      res => {
        this.usersList = res;
      }, error => {
        this._snackBar.open('Error: Failed to fetch users.', '', { duration: 5000 });
      }
    );

    this.suscripciones.add(sus);
  }

  public editUser(idUser: number): void {
    const path = this.location.path();
    this.router.navigate([`${path}/edit`, idUser], {skipLocationChange: environment.skipLocationChange});

  }

  public deleteUser(idUser: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {titulo: 'Delete user', mensaje: 'Are you sure?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        const sus = this.userService.deleteUser(idUser).subscribe(
          res => {
            this._snackBar.open('User deleted successfully', '', {duration: 5000 });
            this.getUsersList();
          }, error => {
            this._snackBar.open('Error: Failed to delete user.', '', { duration: 5000 });
          }
        );
        this.suscripciones.add(sus);
      }
    });
  }

  public addUser(): void {
    const path = this.location.path();
    this.router.navigate([`${path}/new`], {skipLocationChange: environment.skipLocationChange});
  }

}
