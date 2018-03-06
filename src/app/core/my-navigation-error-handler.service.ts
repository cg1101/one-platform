import {Injectable, ErrorHandler} from '@angular/core';
import {NavigationError, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import {MyRouteManager} from './my-route-manager.service';

@Injectable()
export class MyNavigationErrorHandler implements ErrorHandler {

  constructor(private router: Router, mgr: MyRouteManager) {
    this.router.events
      .filter(ev => ev instanceof NavigationError)
      .map(ev => (<NavigationError>ev).url)
      .subscribe(url => console.error('NavigationError: url => ', url));
  }

  handleError(error: Error) {
    console.error('It happens: ', 'an error');
    // console.error(error);
  }
}
