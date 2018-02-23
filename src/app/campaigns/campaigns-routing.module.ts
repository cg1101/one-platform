import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignDashboardComponent } from './campaign-dashboard/campaign-dashboard.component';
import { AudiencesComponent } from './audiences/audiences.component';
import { CreativesComponent } from './creatives/creatives.component';
import { NurturesComponent } from './nurtures/nurtures.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CampaignDashboardComponent,
      },
      {
        path: 'audiences',
        component: AudiencesComponent,
      },
      {
        path: 'creatives',
        component: CreativesComponent,
      },
      {
        path: 'nurtures',
        component: NurturesComponent,
      },
      {
        path: 'promotions',
        component: PromotionsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
