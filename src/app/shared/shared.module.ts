import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PivotModule } from './pivot/pivot.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { ButtonModule } from './button/button.module';
import { TopNavModule } from './top-nav/top-nav.module';
import { BannerModule } from './banner/banner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // one-platform modules
    PivotModule,
    SideNavModule,
    ButtonModule,
    BannerModule,
    TopNavModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // one-platform modules
    PivotModule,
    SideNavModule,
    ButtonModule,
    BannerModule,
    TopNavModule,
  ]
})
export class SharedModule { }
