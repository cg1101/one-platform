import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

/* tslint:disable:directive-selector*/
@Directive({
  selector: '[dropdown-toggle]'
})
export class DropDownToggleDirective {

  parentNode: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    const noop = function () {
    };
    const mock = {
      add: noop,
      remove: noop,
      toggle: noop,
      contains: noop,
    };
    this.parentNode = renderer.parentNode(elementRef.nativeElement) || {classList: mock};
  }

  @HostListener('click', ['$event']) click(event: Event) {
    // console.log(event, new Date);
    // event.preventDefault();
    // event.stopPropagation();
    this.parentNode.classList.toggle('open');
  }

  @HostListener('document:click', ['$event']) documentClick(event: Event) {
    if (event.target !== this.elementRef.nativeElement) {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        // console.log('document:click', event.target, this.elementRef.nativeElement, new Date);
        if (this.parentNode.classList.contains('open')) {
          this.parentNode.classList.remove('open');
        }
      }
    }
  }
}
/* tslint:enable:directive-selector*/
