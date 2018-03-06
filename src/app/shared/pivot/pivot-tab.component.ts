import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'op-pivot-tab',
  templateUrl: 'pivot-tab.component.html',
  styleUrls: ['pivot-tab.component.scss']
})
export class PivotTabComponent implements OnInit {

  label: string;

  constructor(elm: ElementRef) {
    this.label = elm.nativeElement.getAttribute('label');
  }

  ngOnInit() {
  }

}
