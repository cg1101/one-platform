import { Component, OnInit, HostBinding, Self } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'op-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  providers: [ NgClass ]
})
export class SideNavComponent implements OnInit {

  wide: boolean;

  constructor(@Self() private ngClass: NgClass) {
    this.wide = true;
  }

  ngOnInit() {
  }

  @HostBinding('class.wide') isWideOn() {
    return this.wide;
  }

  toggleLabel() {
    this.wide = !this.wide;
    this.ngClass.ngClass = {wide: this.wide};
    this.ngClass.ngDoCheck();
  }

}
