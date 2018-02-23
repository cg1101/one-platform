import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportDashboardComponent } from './report-dashboard/report-dashboard.component';
import { TagHealthComponent } from './tag-health/tag-health.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [ReportDashboardComponent, TagHealthComponent]
})
export class ReportsModule { }
