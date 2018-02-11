import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacementDashboardComponent } from './placement-dashboard/placement-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PlacementDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacementsRoutingModule { }
