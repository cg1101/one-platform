import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementsRoutingModule } from './placements-routing.module';
import { PlacementDashboardComponent } from './placement-dashboard/placement-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    PlacementsRoutingModule
  ],
  declarations: [PlacementDashboardComponent]
})
export class PlacementsModule { }
