import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {

  subscription: Subscription;
  result$: Observable<any[]>;

  constructor(private http: HttpClient) { }

  registerInput(input$, stop$) {
    this.subscription = input$.takeUntil(stop$)
      .subscribe(searchText => {
        console.log('detected searchText change', searchText);
      });
    this.result$ = input$.takeUntil(stop$)
      .switchMap(searchText => {
        return this.http.get('/search', {params: {q: 'all', t: searchText}});
      });
    this.result$.subscribe((resp) => {
      console.log('result=>', resp);
    });
    stop$.subscribe(() => {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    });
    return this.result$;
  }
}
