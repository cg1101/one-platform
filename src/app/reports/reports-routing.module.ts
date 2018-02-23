import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportDashboardComponent } from './report-dashboard/report-dashboard.component';
import { TagHealthComponent } from './tag-health/tag-health.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ReportDashboardComponent,
      },
      {
        path: 'tag-health',
        component: TagHealthComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
