import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PivotComponent } from './pivot.component';
import { PivotTabComponent } from './pivot-tab.component';

@NgModule({
  declarations: [
    PivotComponent,
    PivotTabComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    PivotComponent,
    PivotTabComponent
  ]
})
export class PivotModule {}
