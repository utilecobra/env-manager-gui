import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { MainNavigationService } from './main-navigation.service';
import { EnvironmentsService } from './environments.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { EnvironmentsComponent } from './environments.component';
import { EnvironmentComponent } from './environment.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EnvironmentsComponent,
    EnvironmentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [
    MainNavigationService,
    EnvironmentsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
