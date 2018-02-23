import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignDashboardComponent } from './campaign-dashboard/campaign-dashboard.component';
import { AudiencesComponent } from './audiences/audiences.component';
import { CreativesComponent } from './creatives/creatives.component';
import { NurturesComponent } from './nurtures/nurtures.component';
import { PromotionsComponent } from './promotions/promotions.component';

@NgModule({
  imports: [
    CommonModule,
    CampaignsRoutingModule
  ],
  declarations: [CampaignDashboardComponent, AudiencesComponent, CreativesComponent, NurturesComponent, PromotionsComponent]
})
export class CampaignsModule { }
