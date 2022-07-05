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
    public dialog: MatDialog
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
        this.usersList = res
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
      data: {titulo: 'Eliminar usuario', mensaje: '¿Está seguro que desea eliminar este usuario?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public addUser(): void {
    const path = this.location.path();
    this.router.navigate([`${path}/new`], {skipLocationChange: environment.skipLocationChange});
  }

}
