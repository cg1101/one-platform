import {Component, Input, EventEmitter, Output} from '@angular/core';
import {ContentChildren, Directive, QueryList} from '@angular/core';
import {ElementRef, HostBinding} from '@angular/core';

import {PivotTabComponent} from './pivot-tab.component';

function _isNumberValue(value: any): boolean {
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value));
}

function coerceNumberProperty(value: any, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}

@Component({
  selector: 'op-pivot',
  templateUrl: 'pivot.component.html',
  styleUrls: ['pivot.component.scss']
})
export class PivotComponent {
  @HostBinding('class.op-pivot-guide') true;
  @ContentChildren(PivotTabComponent) tabs: QueryList<PivotTabComponent>;

  label: string;

  @Input() activeIndex: number;
  @Output() activeIndexChange = new EventEmitter<number>();

  @Input() mobileMode: boolean;

  constructor(elm: ElementRef) {
    this.label = elm.nativeElement.getAttribute('label') || '';
  }

  showLabel(): boolean {
    return !(/^\s*$/.test(this.label) || this.mobileMode);
  }

  selectTab(index: number) {
    // console.log('selectTab', index);
    this.activeIndex = index;
    this.activeIndexChange.emit(index);
  }
}
