import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-environment-dialog',
  templateUrl: './create-environment-dialog.component.html',
  styleUrls: ['./create-environment-dialog.component.css']
})
export class CreateEnvironmentDialogComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<CreateEnvironmentDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }
}
