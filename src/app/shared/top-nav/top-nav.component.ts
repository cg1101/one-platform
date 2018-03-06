import {
  Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy,
} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

import {TopNavDataService} from '../../core/top-nav-data.service';
import {SearchService} from '../../core/search.service';

@Component({
  selector: 'op-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, AfterViewInit, OnDestroy {

  userName$: Observable<string>;
  segmentOptions$: Observable<string>;
  dateOptions$: Observable<string>;
  timeZone$: Observable<string>;
  accountName$: Observable<string>;

  searchText$: Observable<string>;
  stop$ = new Subject<boolean>();

  @ViewChild('search') inputElRef: ElementRef;

  constructor(private data: TopNavDataService,
              private searchService: SearchService) {
    this.userName$ = this.data.userName$;
    this.segmentOptions$ = data.segmentOptions$;
    this.dateOptions$ = data.dateOptions$;
    this.timeZone$ = data.timeZone$;
    this.accountName$ = data.account$;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.searchText$ = Observable
      .fromEvent(this.inputElRef.nativeElement, 'keyup')
      .debounceTime(200)
      .map((keyboardEvent: KeyboardEvent) => (<HTMLInputElement>keyboardEvent.target).value);
    this.searchService.registerInput(this.searchText$, this.stop$);
  }

  ngOnDestroy() {
    this.stop$.next(true);
  }

  toggleInfo(key: string) {
    console.log('toggle', key);
  }
}
