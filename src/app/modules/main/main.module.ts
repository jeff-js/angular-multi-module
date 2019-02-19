import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingMainModule } from './main.router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingMainModule,
    SharedModule
  ]
})
export class MainModule { }
