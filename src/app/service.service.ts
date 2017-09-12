import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Service } from './service';
import { ServiceStatus } from './service-status';

@Injectable()
export class ServiceService {
  private backendUrl = 'http://localhost:3000/api/v1';

  constructor(
    private http: Http,
  ) { }

  getStatus(id: string): Promise<ServiceStatus> {
    const url = `${this.backendUrl}/services/${id}/status`;
    return this.http
      .get(url)
      .toPromise()
      .then(res => res.json() as ServiceStatus)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
