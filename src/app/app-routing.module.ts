import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'campaigns',
    loadChildren: './campaigns/campaigns.module#CampaignsModule',
  },
  {
    path: 'placements',
    loadChildren: './placements/placements.module#PlacementsModule',
  },
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule',
  },
  {
    path: 'reports',
    loadChildren: './reports/reports.module#ReportsModule',
  },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
