import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdListModule,
  MdProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdProgressSpinnerModule,
  ],
  exports: [
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdProgressSpinnerModule,
  ]
})

export class MaterialModule { }
