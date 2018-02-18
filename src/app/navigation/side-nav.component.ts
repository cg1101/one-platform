import {Component, OnInit, Input, Self, ElementRef} from '@angular/core';
import {NgClass} from '@angular/common';

import {NavigationNode} from './navigation-node';
import {MyRouteManager} from './my-route-manager.service';

@Component({
  providers: [NgClass],
  selector: 'op-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() nodes: NavigationNode[];

  _collapsed: boolean;

  nodeByPath = {};
  topNodes = [];
  bottomNodes = [];
  currentActivated: NavigationNode | null;

  constructor(@Self() private ngClass: NgClass, elm: ElementRef, private mgr: MyRouteManager) {
    this._collapsed = elm.nativeElement.className.indexOf('collapsed') >= 0;
    mgr.url$.subscribe(url => this.updateActiveNode(url));
  }

  private loadNodes(nodes: NavigationNode[]) {
    this.topNodes.length = 0;
    this.bottomNodes.length = 0;
    this.nodeByPath = {};
    nodes.forEach(_node => {
      const node = Object.assign({}, _node);

      const t = node.path.split('/').filter(s => {
          return s ? s : null;
        }),
        level = t.length, parentPath = '/' + t[0];

      // register itself
      this.nodeByPath[node.path] = node;

      // add to tree
      if (level === 1) {
        node.children = node.children ? node.children : [];
        (node.bottom ? this.bottomNodes : this.topNodes).push(node);
      } else {
        this.nodeByPath[parentPath].children.push(node);
      }
    });
  }

  ngOnInit() {
    this.loadNodes(this.nodes);
  }

  findBestMatch(url: string): NavigationNode {
    // console.log('find best match, using url ===> ', url);
    for (const path of Object.keys(this.nodeByPath)) {
      const node = this.nodeByPath[path];
      // console.log('trying ', node);
      if (url === node.link) {
        return node;
      }
    }
    return null;
  }

  updateActiveNode(url: string) {
    console.log('SideNav: observed url change ==> ', url);
    const node: NavigationNode = this.findBestMatch(url);
    // console.log('best match returns', node);
    if (this.currentActivated === node) {
      return;
    }
    if (this.currentActivated && this.currentActivated !== null) {
      this.currentActivated.active = false;
    }
    this.currentActivated = node;
    if (node) {
      this.currentActivated.active = true;
      if (this._collapsed) {
        this.toggle();
      }
    }
  }

  toggle(): void {
    this._collapsed = !this._collapsed;
    this.ngClass.ngClass = {collapsed: this._collapsed};
    this.ngClass.ngDoCheck();
  }

  isExpanded(node: NavigationNode): boolean {
    const ac: NavigationNode = this.currentActivated;
    if (!ac) {
      return false;
    }
    return ac === node || ac.path.indexOf(node.path) === 0;
  }

  activate(node: NavigationNode): void {
    this.mgr.setUrl(node.link);
  }
}
