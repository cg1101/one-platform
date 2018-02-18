import {Injectable} from '@angular/core';

import {NavigationNode} from './navigation-node';

@Injectable()
export class NavigationNodeService {

  constructor() {
  }

  getNodes(): NavigationNode[] {
    const nodes: NavigationNode[] = [];
    [
      {
        path: '/dashboard',
        label: 'Dashboard',
        icon: 'dashboard',
        link: '/dashboard',
      },
      {
        path: '/campaign',
        label: 'Campaigns',
        icon: 'campaign',
        link: '/campaigns',
      },
      {
        path: '/campaign/audiences',
        label: 'Audiences',
        link: '/campaigns/audiences',
      },
      {
        path: '/campaign/creatives',
        label: 'Creatives',
        link: '/campaigns/creatives',
      },
      {
        path: '/campaign/nurtures',
        label: 'Nurtures',
        link: '/campaigns/nurtures',
      },
      {
        path: '/campaign/promotions',
        label: 'Promotions',
        link: '/campaigns/promotions',
      },
      {
        path: '/placement',
        label: 'Placements',
        icon: 'placement',
        link: '/placements',
      },
      {
        path: '/placement/allow-block',
        label: 'Allow/Block Ads',
        link: '/placements/allow-block',
      },
      {
        path: '/placement/advertiser',
        label: 'Advertiser Ads',
        link: '/placements/advertiser',
      },
      {
        path: '/placement/ad-types',
        label: 'Ad Types',
        link: '/placements/ad-types',
      },
      {
        path: '/placement/ad-review',
        label: 'Ad Review',
        link: '/placements/ad-review',
      },
      {
        path: '/placement/ad-limits',
        label: 'Ad Limits',
        link: '/placements/ad-limits',
      },
      {
        path: '/customer-data',
        label: 'Customers & Data',
        icon: 'customer-data',
        link: '/customer-data',
      },
      {
        path: '/customer-data/recent-customers',
        label: 'Recent Customers',
        link: '/customer-data/recent-customers',
      },
      {
        path: '/customer-data/basic-fields',
        label: 'Basic Fields',
        link: '/customer-data/basic-fields',
      },
      {
        path: '/customer-data/custom-fields',
        label: 'Custom Fields',
        link: '/customer-data/custom-fields',
      },
      {
        path: '/customer-data/customer-lookup',
        label: 'Customers Lookup',
        link: '/customer-data/customer-lookup',
      },
      {
        path: '/reports',
        label: 'Reports',
        icon: 'reports',
        link: '/reports',
      },
      {
        path: '/reports/tag-health',
        label: 'Tag Health',
        link: '/reports/tag-health',
      },
      {
        path: '/connect',
        label: 'Connect',
        icon: 'connect',
        link: '/connect',
        bottom: true
      },
      {
        path: '/help',
        label: 'Help',
        icon: 'help',
        link: '/help',
        bottom: true
      },
      {
        path: '/feedback',
        label: 'Feedback',
        icon: 'feedback',
        link: '/feedback',
        bottom: true
      },
    ].forEach(o => {
      nodes.push(<NavigationNode>o);
    });

    return nodes;
  }
}
