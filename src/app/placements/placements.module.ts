import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementsRoutingModule } from './placements-routing.module';
import { PlacementDashboardComponent } from './placement-dashboard/placement-dashboard.component';
import { AllowBlockComponent } from './allow-block/allow-block.component';
import { AdvertiserComponent } from './advertiser/advertiser.component';
import { AdTypesComponent } from './ad-types/ad-types.component';
import { AdReviewComponent } from './ad-review/ad-review.component';
import { AdLimitsComponent } from './ad-limits/ad-limits.component';

@NgModule({
  imports: [
    CommonModule,
    PlacementsRoutingModule
  ],
  declarations: [PlacementDashboardComponent, AllowBlockComponent, AdvertiserComponent, AdTypesComponent, AdReviewComponent, AdLimitsComponent]
})
export class PlacementsModule { }
