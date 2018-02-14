import {Component} from '@angular/core';

import {NavigationNode} from './side-nav/navigation-node';
import {NavigationNodeService} from './side-nav/navigation-node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app';
  nodes: NavigationNode[];

  constructor(private svc: NavigationNodeService) {
    this.nodes = svc.getNodes();
  }
}
