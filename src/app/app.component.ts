import {Component} from '@angular/core';

import {NavigationNode} from './shared/side-nav/navigation-node';
import {NavigationNodeService} from './core/navigation-node.service';
import {MyRouteManager} from './core/my-route-manager.service';

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
