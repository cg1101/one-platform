import {
  Component, OnInit, ViewChild, ElementRef, Self, Input, HostBinding, HostListener,
} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgClass} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/take';

@Component({
  selector: 'op-search-box',
  templateUrl: 'search-box.component.html',
  styleUrls: ['search-box.component.scss'],
  providers: [NgClass],
})
export class SearchBoxComponent implements OnInit {

  @HostBinding('class.dropdown') true;
  @Input() placeholder: string;

  @ViewChild('input') inputRef: ElementRef;
  @ViewChild('footer') footer: ElementRef;
  @ViewChild('resultBox') resultBox: ElementRef;

  link$: Subject<string>;
  el_disabled$: Subject<boolean>;
  disabled$: Observable<boolean>;

  nextUrl: string;
  action$: Subject<string>;

  result: Object[] = [];
  result$: Observable<Object>;

  cssClass = {
    open: false,
    focused: false,
    loading: false,
  };

  @HostListener('document:click', ['$event']) documentClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.toggleCssClass('open', false);
    }
  }

  @Input() set link(value: string) {
    this.link$.next(`${value}`);
  }

  @Input('disabled') set el_disabled(value) {
    this.el_disabled$.next(Boolean(value));
  }

  constructor(@Self() private ngClass: NgClass,
              private elementRef: ElementRef,
              private http: HttpClient) {
    this.placeholder = '';
    this.link$ = new BehaviorSubject<string>('');
    this.el_disabled$ = new BehaviorSubject<boolean>(false);
    this.action$ = new Subject<string>();
    this.nextUrl = null;
  }

  ngOnInit() {
    // observable of searchText
    const searchText$ = Observable.fromEvent(this.inputRef.nativeElement, 'keyup')
      .debounceTime(200)
      .map((ev: KeyboardEvent) => (<HTMLInputElement>ev.target).value);

    Observable.fromEvent(this.inputRef.nativeElement, 'focus')
      .subscribe(() => this.toggleCssClass('focused', true));
    Observable.fromEvent(this.inputRef.nativeElement, 'blur')
      .subscribe(() => this.toggleCssClass('focused', false));

    // observable for new search
    searchText$.combineLatest(this.link$, (text, link) => ({text, link}))
      .subscribe(data => {
        // reset result since this is a new search
        this.result.length = 0;
        const url = data.link,
          searchText = data.text;
        this.action$.next(`${url}?q=all&t=${searchText}`);
      });

    this.result$ = this.action$.switchMap(url => {
      return this.http.get(url);
    });

    this.action$.subscribe(() => {
      // loading started
      this.toggleCssClass('loading', true);
      this.toggleCssClass('open', true);
    });

    this.result$.subscribe(val => {
      // loading finished
      this.toggleCssClass('loading', false);
      this.result = this.result.concat(val['result']);
      this.nextUrl = val['_links']['next'] || null;
      setTimeout(() => {
        if (this.isTriggerVisible()) {
          this.loadMore();
        }
      }, 1000);
    });

    this.disabled$ = this.link$
      .combineLatest(this.el_disabled$, (url, isDisabled) => ({url, isDisabled}))
      .map(v => {
        return !v.url || !/\S/.test(v.url) || v.isDisabled;
      });

    Observable.fromEvent(this.resultBox.nativeElement, 'scroll')
      .debounceTime(200)
      .map(this.isTriggerVisible.bind(this))
      .distinctUntilChanged()
      .subscribe(shouldLoad => shouldLoad && this.loadMore());
  }

  toggleCssClass(key: 'open' | 'focused' | 'loading', onOff: boolean) {
    this.cssClass[key] = onOff;
    this.ngClass.ngClass = this.cssClass;
    this.ngClass.ngDoCheck();
  }

  isTriggerVisible() {
    const el = this.resultBox.nativeElement.getBoundingClientRect();
    const tr = this.footer.nativeElement.getBoundingClientRect();
    const isVisible = tr.top < el.top + el.height;
    return isVisible;
  }

  loadMore() {
    if (this.nextUrl) {
      this.action$.next(this.nextUrl);
    }
  }
}
