import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Environment } from './environment';
import { Service } from './service';

@Injectable()
export class EnvironmentService {
  private backendUrl = 'http://localhost:3000/api/v1';
  private headers = new Headers({'Content-Type': 'application/json'});

  private environments: Environment[];
  private environmentsSource = new Subject<Environment[]>();
  environments$ = this.environmentsSource.asObservable();
  private environmentsInitialized: boolean;

  constructor(private http: Http) {
    this.environmentsInitialized = false;
   }

  onEnvironmentsChanged(): void {
    this.environmentsSource.next(this.environments);
  }

  refreshEnvironments(): Promise<void> {
    const url = `${this.backendUrl}/environments`;

    return this.http
      .get(url)
      .toPromise()
      .then(res => {
        this.environments = res.json();
        this.onEnvironmentsChanged();
      })
      .catch(this.handleError);
  }

  getEnvironments(): Promise<Environment[]> {
    if (!this.environmentsInitialized) {
      return this.refreshEnvironments()
        .then(() => {
          this.environmentsInitialized = true;
          return this.environments as Environment[];
        });
    } else {
      return Promise.resolve(this.environments);
    }
  }

  getEnvironment(id: string): Promise<Environment> {
    const url = `${this.backendUrl}/environments/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(res => res.json() as Environment);
  }

  createEnvironment(displayName: string, host: string): Promise<void> {
    const url = `${this.backendUrl}/environments`;

    return this.http
      .post(url, JSON.stringify({
        displayName: displayName,
        host: host
      }), {headers: this.headers})
      .toPromise()
      .then(res => {
        this.environments.push(res.json());
        this.onEnvironmentsChanged();
      });
  }

  deleteEnvironment(id: string): Promise<void> {
    const url = `${this.backendUrl}/environments/${id}`;

    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => {
        this.environments = this.environments.filter(e => e.id !== id);
        this.onEnvironmentsChanged();
      });
  }

  getEnvironmentServices(id: string): Promise<Service[]> {
    const url = `${this.backendUrl}/environments/${id}/services`;

    return this.http
      .get(url)
      .toPromise()
      .then(res => res.json() as Service[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
