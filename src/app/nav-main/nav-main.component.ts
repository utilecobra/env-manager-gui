import { Component, OnInit, Input } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { EnvironmentService } from '../environment.service';
import { Subscription } from 'rxjs/Subscription';

import { Environment } from '../environment';
import { NavItem } from './nav-item';

const NAV_ITEMS: NavItem[] = [
  {
    icon: 'home',
    label: 'Home',
    link: '/home'
  },
  {
    icon: 'cloud',
    label: 'Environments',
    link: '/environments'
  },
];

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent implements OnInit {
  navItems: NavItem[] = NAV_ITEMS;
  environmentsSubscription: Subscription;
  environments: Environment[];
  @Input() sidenav: MdSidenav;

  constructor(
    private environmentService: EnvironmentService,
  ) {
    this.environmentsSubscription = environmentService.environments$.subscribe(environments => this.environments = environments);
  }

  ngOnInit() {
    this.environmentService
      .getEnvironments()
      .then(environments => this.environments = environments);
  }
}
