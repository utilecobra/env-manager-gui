import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { EnvironmentService } from './environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'Env Manager';

  constructor (
    private environmentService: EnvironmentService,
    public snackBar: MdSnackBar,
  ) { }

  ngOnInit(): void {
    this.environmentService
      .refreshEnvironments()
      .then()
      .catch(() => {
        this.snackBar.open('Error loading environments!', 'DISMISS', {duration: 7000});
      });
  }
}
