import {Component} from '@angular/core';

import {NavigationNode} from './navigation/navigation-node';
import {NavigationNodeService} from './navigation/navigation-node.service';
import {MyRouteManager} from './navigation/my-route-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app';
  nodes: NavigationNode[];

  constructor(private svc: NavigationNodeService, mgr: MyRouteManager) {
    this.nodes = svc.getNodes();
    setTimeout(() => {
      mgr.setUrl('/dashboard');
    }, 100);
  }
}
