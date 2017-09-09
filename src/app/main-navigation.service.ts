import { Injectable } from '@angular/core';

import { NavItem } from './nav-item';
import { NAVITEMS } from './mock-main-navigation';

@Injectable()
export class MainNavigationService {

  constructor() { }

  getNavigation(): Promise<NavItem[]> {
    return Promise.resolve(NAVITEMS);
  }
}
