import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlarmListComponent } from './dashboard/alarm-list/alarm-list.component';
import { SiteViewComponent } from './dashboard/site-view/site-view.component';
import { FuelLevelComponent } from './dashboard/fuel-level/fuel-level.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AlarmListComponent,
    SiteViewComponent,
    FuelLevelComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
