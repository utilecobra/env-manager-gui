import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MdSidenav } from '@angular/material';

import { NavItem } from './nav-item';
import { Environment } from './environment';

import { MainNavigationService } from './main-navigation.service';
import { EnvironmentsService } from './environments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'Env Manager';
  mainNavigation: NavItem[];
  environments: Environment[];
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor (
    private mainNavigationSerivce: MainNavigationService,
    private environmentsService: EnvironmentsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getNavigation();
    this.getEnvironments();
  }

  getNavigation(): void {
    this.mainNavigationSerivce
      .getNavigation()
      .then(navigation => this.mainNavigation = navigation);
  }

  getEnvironments(): void {
    this.environmentsService
      .getEnvironments()
      .then(environments => this.environments = environments);
  }

  onNavigate(item: NavItem): void {
    this.sidenav.close();
  }
}
