import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacementDashboardComponent } from './placement-dashboard/placement-dashboard.component';
import { AllowBlockComponent } from './allow-block/allow-block.component';
import { AdvertiserComponent } from './advertiser/advertiser.component';
import { AdTypesComponent } from './ad-types/ad-types.component';
import { AdReviewComponent } from './ad-review/ad-review.component';
import { AdLimitsComponent } from './ad-limits/ad-limits.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PlacementDashboardComponent,
      },
      {
        path: 'allow-block',
        component: AllowBlockComponent,
      },
      {
        path: 'advertiser',
        component: AdvertiserComponent,
      },
      {
        path: 'ad-types',
        component: AdTypesComponent,
      },
      {
        path: 'ad-review',
        component: AdReviewComponent,
      },
      {
        path: 'ad-limits',
        component: AdLimitsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacementsRoutingModule { }
