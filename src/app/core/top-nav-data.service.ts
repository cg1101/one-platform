import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TopNavDataService {

  userName$: Observable<string>;
  segmentOptions$: Observable<string>;
  dateOptions$: Observable<string>;
  timeZone$: Observable<string>;
  account$: Observable<string>;

  constructor() {
    this.userName$ = of('John Smith');
    this.segmentOptions$ = of('2 Segments');
    this.dateOptions$ = of('Past Day');
    this.timeZone$ = of('UTC+1');
    this.account$ = of(null);
  }
}
