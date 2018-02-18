import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { NavigationModule } from './navigation/navigation.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NavigationNodeService } from './navigation/navigation-node.service';
import { MyRouteManager } from './navigation/my-route-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    DashboardModule,
  ],
  providers: [
    NavigationNodeService,
    MyRouteManager,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
