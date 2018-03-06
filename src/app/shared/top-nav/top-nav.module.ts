import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ButtonModule} from '../button/button.module';
import {TopNavComponent} from './top-nav.component';
import {AccountMenuComponent} from './account-menu/account-menu.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {SegmentPickerComponent} from './segment-picker/segment-picker.component';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {
  GenericItemDirective, CampaignItemComponent, CreativeItemComponent,
  AudienceItemComponent, UserItemComponent, UnknownItemComponent,
} from './search-box/generic-item.directive';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
  ],
  declarations: [
    TopNavComponent,
    AccountMenuComponent,
    SearchBoxComponent,
    DatePickerComponent,
    SegmentPickerComponent,
    UserMenuComponent,
    GenericItemDirective,
    CampaignItemComponent,
    CreativeItemComponent,
    AudienceItemComponent,
    UserItemComponent,
    UnknownItemComponent,
  ],
  exports: [
    TopNavComponent,
    SearchBoxComponent,
  ],
  entryComponents: [
    CampaignItemComponent,
    CreativeItemComponent,
    AudienceItemComponent,
    UserItemComponent,
    UnknownItemComponent,
  ]
})
export class TopNavModule {
}
