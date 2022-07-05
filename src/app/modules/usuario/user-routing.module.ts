import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultUsersComponent } from './pages/consult-users/consult-users.component';
import { UserComponent } from './pages/user/user.component';


const routes: Routes = [
  {
    path: '',
    component: ConsultUsersComponent
  },
  {
    path: 'new',
    component: UserComponent
  },
  {
    path: 'edit/:id',
    component: UserComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
