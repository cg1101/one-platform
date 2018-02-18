import {Component, Input, Output, EventEmitter} from '@angular/core';

import {NavigationNode} from './navigation-node';

@Component({
  selector: 'op-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {
  @Input() node: NavigationNode;
  @Output() click: EventEmitter<NavigationNode>;

  constructor() {
    this.click = new EventEmitter<NavigationNode>();
  }

  activate() {
    this.click.emit(this.node);
  }

  getLink() {
    return this.node.link;
  }
}
