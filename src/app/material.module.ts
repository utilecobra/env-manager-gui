import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdSidenavModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdSidenavModule
  ],
  exports: [
    MdButtonModule,
    MdSidenavModule
  ]
})

export class MaterialModule { }
