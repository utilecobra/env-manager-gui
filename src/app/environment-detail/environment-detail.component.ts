import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

import { Environment } from '../environment';
import { Service } from '../service';

import { EnvironmentService } from '../environment.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-environment-detail',
  templateUrl: 'environment-detail.component.html',
  styleUrls: ['environment-detail.component.css']
})

export class EnvironmentDetailComponent implements OnInit {
  environment: Environment;
  servicesSource: ServicesDataSource | null;
  working = false;

  constructor(
    private environmentsService: EnvironmentService,
    private serviceService: ServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // Get environment details
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.environment = null;
        return this.environmentsService.getEnvironment(params.get('id'));
      })
      .subscribe(environment => this.environment = environment);
    // Get environment services
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return Promise.resolve(this.servicesSource = new ServicesDataSource(
            this.environmentsService,
            this.serviceService,
            params.get('id')
          ));
      })
      .subscribe();
  }
}

class ServicesDataSource extends DataSource<any> {
  subject: Subject<Service[]> = new Subject<Service[]>();
  services: Service[] = [];

  constructor(
    private environmentService: EnvironmentService,
    private serviceService: ServiceService,
    private _environmentId: string,
  ) {
    super();
  }

  connect(): Observable<Service[]> {
    if (!this.subject.isStopped) {
      this.environmentService.getEnvironmentServices(this._environmentId)
        .then(services => {
          this.services = services;
          this.subject.next(this.services);
          this.getStatuses();
        });
    }
    return this.subject;
  }

  disconnect(): void {
    this.subject.complete();
    this.subject.observers = [];
  }

  getStatuses(): void {
    this.services.forEach(service => {
      this.serviceService.getStatus(service.id)
      .then(res => {
        service.status = res;
        this.subject.next(this.services);
      });
    });
  }
}
