import { ServiceStatus } from './service-status';

export class Service {
  id: string;
  displayName: string;
  type: string;
  status: ServiceStatus;
}
