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
  MdTableModule,
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
    MdTableModule,
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
    MdTableModule,
  ]
})

export class MaterialModule { }
