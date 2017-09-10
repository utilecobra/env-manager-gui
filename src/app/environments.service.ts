import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Environment } from './environment';

@Injectable()
export class EnvironmentsService {
  private backendUrl = 'http://localhost:3000/api/v1';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getEnvironments(): Promise<Environment[]> {
    const url = `${this.backendUrl}/environments`;

    return this.http
      .get(url)
      .toPromise()
      .then(res => res.json() as Environment[]);
  }

  getEnvironment(id: string): Promise<Environment> {
    const url = `${this.backendUrl}/environments/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(res => res.json() as Environment);
  }
}
