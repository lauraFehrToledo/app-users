import { NgModule } from '@angular/core';
import { LibreriaBotonLauraComponent } from './libreria-boton-laura.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LibreriaBotonLauraComponent
  ],
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [
    LibreriaBotonLauraComponent
  ]
})
export class LibreriaBotonLauraModule { }
