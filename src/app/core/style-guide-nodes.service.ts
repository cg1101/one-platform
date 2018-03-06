import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { NavigationNode } from '../shared/side-nav/navigation-node';

@Injectable()
export class StyleGuideNodesService {

  predefined: NavigationNode[] = [
    {
      path: '/1',
      label: 'Style Guide',
      icon: 'creative',
      link: '/1',
    },
    {
      path: '/2',
      label: 'UI Components',
      icon: 'campaign',
      link: '/2',
    }
  ];
  nodes: NavigationNode[] = [];

  constructor(router: Router) {
    this.loadNodesFromRoutes(router.config);
  }

  loadNodesFromRoutes(Routes) {
    function loadRoute(r: Route): NavigationNode[] {
      const link = '/' + r.path;
      let rs = <NavigationNode[]>[];
      if (r.data && r.data['path'] && r.data['label']) {
        const path = r.data['path'],
          label = r.data['label'];
        rs.push({path, label, link});
      }
      if (r.children) {
        r.children.forEach((child: Route) => {
          rs = rs.concat(loadRoute(child));
        });
      }
      return rs;
    }

    let buf = [];
    Routes.forEach((r: Route) => {
      buf = buf.concat(loadRoute(r));
    });
    this.nodes = this.predefined.concat(buf);
  }
  getNodes(): NavigationNode[] {
    return this.nodes;
  }
}
