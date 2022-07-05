import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
      MatDialogModule,
      MatButtonModule
    ],
    providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

  export class SharedModule { }