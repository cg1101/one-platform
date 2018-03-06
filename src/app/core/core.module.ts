import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { InMemorySearchResultService } from './in-memory-search-result.service';
import { MyRouteManager } from './my-route-manager.service';
import { NavigationNodeService } from './navigation-node.service';
import { SearchService } from './search.service';
import { TopNavDataService } from './top-nav-data.service';
import { StyleGuideNodesService } from './style-guide-nodes.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    SearchService,
    TopNavDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InMemorySearchResultService,
      multi: true,
    },
    NavigationNodeService,
    MyRouteManager,
    StyleGuideNodesService,
  ],
})
export class CoreModule { }
