import {Injectable} from '@angular/core';

import {NavigationNode} from './navigation-node';

@Injectable()
export class NavigationNodeService {

  constructor() {
  }

  getNodes(): NavigationNode[] {
    let nodes = [];
    [
      {
        icon: 'dashboard',
        label: 'Dashboard',
        link: '/dashboard'
      },
      {
        icon: 'campaign',
        label: 'Campaigns',
        link: '/campaigns'
      },
      {
        icon: 'placement',
        label: 'Placement',
        link: '/placement'
      },
      {
        icon: 'customer-data',
        label: 'Customers & Data',
        link: '/customer-data'
      },
      {
        icon: 'reports',
        label: 'Reports',
        link: '/reports'
      },
    ].forEach(o=> {
      nodes.push(<NavigationNode>o);
    });
    return nodes;
  }

}
