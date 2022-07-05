import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';
import { UserConstants } from '../../user-constants';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent {
  
  @Input() usersList: Array<User>;
  @Input() displayedColumns: Array<string>

  @Output() editUserSelected: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteUserSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor( public readonly constants: UserConstants ) { }

  public editUser(idUser: number) {
    this.editUserSelected.emit(idUser);
  }

  public deleteUser(idUser: number) {
    this.deleteUserSelected.emit(idUser);
  }

}
