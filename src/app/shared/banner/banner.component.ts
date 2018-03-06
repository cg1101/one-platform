import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'op-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() header: string;
  @Input() linkLabel: string;
  @Output() click = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(event: Event) {
    console.log('onClick', new Date);
    event.preventDefault();
    event.stopPropagation();
    this.click.emit();
  }
}
