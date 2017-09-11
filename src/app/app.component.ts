import { Component, OnInit } from '@angular/core';

import { EnvironmentService } from './environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'Env Manager';

  constructor (
    private environmentService: EnvironmentService
  ) {
    this.environmentService.refreshEnvironments();
  }

  ngOnInit(): void { }
}
