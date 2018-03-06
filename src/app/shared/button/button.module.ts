import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropDownToggleDirective } from './drop-down-toggle.directive';
import { DropDownHoverToggleDirective } from './drop-down-hover-toggle.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropDownToggleDirective,
    DropDownHoverToggleDirective,
  ],
  exports: [
    DropDownToggleDirective,
    DropDownHoverToggleDirective,
  ]
})
export class ButtonModule { }
