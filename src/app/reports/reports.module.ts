import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportDashboardComponent } from './report-dashboard/report-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [ReportDashboardComponent]
})
export class ReportsModule { }
