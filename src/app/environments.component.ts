import { Component, OnInit } from '@angular/core';

import { Environment } from './environment';

import { EnvironmentsService } from './environments.service';

@Component({
  selector: 'app-environments',
  templateUrl: 'environments.component.html'
})

export class EnvironmentsComponent implements OnInit {
  environments: Environment[];

  constructor(
    private environmentService: EnvironmentsService
  ) { }

  ngOnInit() {
    this.environmentService
      .getEnvironments()
      .then(environments => this.environments = environments);
  }
}
