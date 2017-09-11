import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Environment } from '../environment';

import { EnvironmentService } from '../environment.service';

@Component({
  selector: 'app-environment-detail',
  templateUrl: 'environment-detail.component.html',
  styleUrls: ['environment-detail.component.css']
})

export class EnvironmentDetailComponent implements OnInit {
  environment: Environment;

  constructor(
    private environmentsService: EnvironmentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.environment = null;
        return this.environmentsService.getEnvironment(params.get('id'));
      })
      .subscribe(environment => this.environment = environment);
  }
}
