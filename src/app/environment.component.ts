import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Environment } from './environment';

import { EnvironmentsService } from './environments.service';

@Component({
  selector: 'app-environment',
  templateUrl: 'environment.component.html'
})

export class EnvironmentComponent implements OnInit {
  environment: Environment;

  constructor(
    private environmentsService: EnvironmentsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.environmentsService.getEnvironment(+params.get('id')))
      .subscribe(environment => this.environment = environment);
  }
}
