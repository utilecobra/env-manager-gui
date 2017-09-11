import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdListModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdDialogModule,
  MdSnackBarModule,
  MdInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDialogModule,
    MdSnackBarModule,
    MdInputModule,
  ],
  exports: [
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDialogModule,
    MdSnackBarModule,
    MdInputModule,
  ]
})

export class MaterialModule { }
