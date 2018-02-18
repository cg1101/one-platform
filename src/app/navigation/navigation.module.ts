import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideNavComponent } from './side-nav.component';
import { NavButtonComponent } from './nav-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SideNavComponent,
    NavButtonComponent,
  ],
  exports: [
    SideNavComponent,
    NavButtonComponent,
  ]
})
export class NavigationModule { }
