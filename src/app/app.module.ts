import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule } from './material/material.module';

import { EnvironmentService } from './environment.service';
import { ServiceService } from './service.service';

import { AppComponent } from './app.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { EnvironmentDetailComponent } from './environment-detail/environment-detail.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { CreateEnvironmentDialogComponent } from './create-environment-dialog/create-environment-dialog.component';
import { WorkingIndicatorComponent } from './working-indicator/working-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteConfirmDialogComponent,
    DashboardComponent,
    EnvironmentsComponent,
    EnvironmentDetailComponent,
    NavMainComponent,
    CreateEnvironmentDialogComponent,
    WorkingIndicatorComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule,
  ],
  providers: [
    EnvironmentService,
    ServiceService,
  ],
  entryComponents: [
    CreateEnvironmentDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
