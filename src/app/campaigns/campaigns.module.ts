import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignDashboardComponent } from './campaign-dashboard/campaign-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    CampaignsRoutingModule
  ],
  declarations: [CampaignDashboardComponent]
})
export class CampaignsModule { }
