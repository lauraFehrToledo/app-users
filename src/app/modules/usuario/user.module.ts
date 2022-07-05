import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import { LibreriaBotonLauraModule } from 'projects/libreria-boton-laura/src/public-api';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from './services/user.service';
import { UserRoutingModule } from './user-routing.module';
import { UserConstants } from './user-constants';
import { UserComponent } from './pages/user/user.component';
import { ConsultUsersComponent } from './pages/consult-users/consult-users.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    UserRoutingModule,
    FormsModule,
    MatTableModule,
    LibreriaBotonLauraModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  declarations: [
    ConsultUsersComponent,
    UserComponent,
    UserComponent,
    ConsultUsersComponent
  ],
  providers: [
    UserService,
    UserConstants
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
