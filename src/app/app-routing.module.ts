import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { EnvironmentsComponent } from './environments.component';
import { EnvironmentComponent } from './environment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'environments', component: EnvironmentsComponent },
  { path: 'environment/:id', component: EnvironmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
