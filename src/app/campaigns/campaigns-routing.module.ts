import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignDashboardComponent } from './campaign-dashboard/campaign-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
