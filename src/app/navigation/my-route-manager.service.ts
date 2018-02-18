import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MyRouteManager {

  public url$: Subject<string>;

  constructor() {
    this.url$ = new Subject<string>();
  }

  setUrl(url: string) {
    this.url$.next(url);
  }

}
