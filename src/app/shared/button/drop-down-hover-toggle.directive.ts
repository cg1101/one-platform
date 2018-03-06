import {
  Directive, ElementRef, HostListener, HostBinding, OnInit, ContentChild
} from '@angular/core';

/* tslint:disable:directive-selector*/
@Directive({
  selector: '[dropdown-hover-toggle]'
})
export class DropDownHoverToggleDirective implements OnInit {

  @HostBinding('class.dropdown') true;
  @ContentChild('indicator') indicator: ElementRef;

  switchNode: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit () {
    this.switchNode = this.elementRef.nativeElement;
  }

  @HostListener('mouseenter', ['$event']) mouseenter(event: Event) {
    this.switchNode.classList.add('open');
    if (this.indicator && this.indicator.nativeElement) {
      this.indicator.nativeElement.classList.remove('op-icon-down');
      this.indicator.nativeElement.classList.add('op-icon-up');
    }
  }

  @HostListener('mouseleave', ['$event']) mouseleave(event: Event) {
    this.switchNode.classList.remove('open');
    if (this.indicator && this.indicator.nativeElement) {
      this.indicator.nativeElement.classList.remove('op-icon-up');
      this.indicator.nativeElement.classList.add('op-icon-down');
    }
  }
}
/* tslint:enable:directive-selector*/
