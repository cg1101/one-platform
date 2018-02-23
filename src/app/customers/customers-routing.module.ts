import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { RecentCustomersComponent } from './recent-customers/recent-customers.component';
import { BasicFieldsComponent } from './basic-fields/basic-fields.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { CustomerLookupComponent } from './customer-lookup/customer-lookup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CustomerDashboardComponent,
      },
      {
        path: 'recent-customers',
        component: RecentCustomersComponent,
      },
      {
        path: 'basic-fields',
        component: BasicFieldsComponent,
      },
      {
        path: 'custom-fields',
        component: CustomFieldsComponent,
      },
      {
        path: 'customer-lookup',
        component: CustomerLookupComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
