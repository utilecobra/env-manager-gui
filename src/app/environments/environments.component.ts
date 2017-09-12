import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

import { NavMainComponent } from '../nav-main/nav-main.component';
import { CreateEnvironmentDialogComponent } from '../create-environment-dialog/create-environment-dialog.component';

import { Environment } from '../environment';

import { EnvironmentService } from '../environment.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-environments',
  templateUrl: 'environments.component.html',
  styleUrls: ['environments.component.css']
})

export class EnvironmentsComponent implements OnInit {
  environments: Environment[];
  environmentsSubscription: Subscription;
  working = false;

  constructor(
    private environmentService: EnvironmentService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar,
  ) {
    this.environmentsSubscription = this.environmentService.environments$.subscribe(environments => this.environments = environments);
  }

  ngOnInit() {
    this.environmentService
      .getEnvironments()
      .then(environments => this.environments = environments);
  }

  openCreateEnvironmentDialog(): void {
    const dialogRef = this.dialog.open(CreateEnvironmentDialogComponent, {
      data: {
        displayName: '',
        host: ''
      }
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.createEnvironment(result.displayName, result.host);
        }
      });
  }

  createEnvironment(displayName: string, host: string): void {
    this.working = true;
    this.environmentService
      .createEnvironment(displayName, host)
      .then(() => {
        this.working = false;
        this.snackBar.open('Environment created.', 'DISMISS', {duration: 7000});
      });
    }

    deleteEnvironment(environment: Environment): void {
      this.working = true;
      this.environmentService
      .deleteEnvironment(environment.id)
      .then(() => {
        this.working = false;
        this.snackBar.open('Environment deleted.', 'DISMISS', {duration: 7000});
      });
  }
}
