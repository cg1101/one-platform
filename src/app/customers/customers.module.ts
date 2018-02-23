import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { RecentCustomersComponent } from './recent-customers/recent-customers.component';
import { BasicFieldsComponent } from './basic-fields/basic-fields.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { CustomerLookupComponent } from './customer-lookup/customer-lookup.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomerDashboardComponent, RecentCustomersComponent, BasicFieldsComponent, CustomFieldsComponent, CustomerLookupComponent]
})
export class CustomersModule { }
