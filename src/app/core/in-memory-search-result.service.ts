import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class InMemorySearchResultService implements HttpInterceptor {

  parseQueryString(queryString: string): Map<string, string> {
    // if the query string is NULL
    if (queryString == null) {
      queryString = window.location.search.substring(1);
    }

    const params = new Map<string, string>();
    const queries = queryString.split('&');

    queries.forEach((indexQuery: string) => {
      const indexPair = indexQuery.split('=');

      const queryKey = decodeURIComponent(indexPair[0]);
      const queryValue = decodeURIComponent(indexPair.length > 1 ? indexPair[1] : '');

      params[queryKey] = queryValue;
    });

    return params;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const data: Object = {
      campaign: [
        {campaignId: 123, name: 'campaign #123'},
        {campaignId: 123456, name: 'campaign #123456'},
        {campaignId: 123456789, name: 'campaign #123456789'},
      ],
      creative: [
        {creativeId: 123, name: 'creative #123'},
        {creativeId: 123456, name: 'creative #123456'},
        {creativeId: 123456789, name: 'creative #123456789'},
      ],
      audience: [
        {audienceId: 123, name: 'audience #123'},
        {audienceId: 123456, name: 'audience #123456'},
        {audienceId: 123456789, name: 'audience #123456789'},
      ],
      user: [
        {userId: 123, name: 'user #123'},
        {userId: 123456, name: 'user #123456'},
        {userId: 123456789, name: 'user #123456789'},
      ],
    };

    const authReq = req.clone(/*{headers: req.headers.set('Bearer', 'whatever-value')}*/);

    let url = req.url;

    if (url === '/search' || /^\/search\?/.test(url)) {
      let searchText = req.params.get('t'),
        q = req.params.get('q') || 'all',
        pageIndex = +(req.params.get('pageIndex') || 0);
      const result = [];
      const x = req.url.indexOf('?');

      if (x > 0) {
        url = url.substring(0, x);
        const params = this.parseQueryString(req.url.substr(x + 1));
        searchText = params['t'];
        q = params['q'];
        pageIndex = +(params['pageIndex'] || 0);
      }

      const myFilter = function(obj): boolean {
        let s = '';
        for (const key of Object.keys(obj)) {
          s += obj[key];
        }
        return s.includes(searchText);
      };

      switch (q) {
        case 'campaign':
        case 'creative':
        case 'audience':
        case 'user':
          data[q].filter(myFilter).forEach(obj => {
            result.push(Object.assign({}, obj, {type: q}));
          });
          break;
        case 'all':
          for (const k of Object.keys(data)) {
            data[k].filter(myFilter).forEach(obj => {
              result.push(Object.assign({}, obj, {type: k}));
            });
          }
      }

      const pageSize = 5, offset = pageIndex * pageSize;
      const pageResult = result.slice(offset, offset + pageSize);
      const body: {
        pageIndex: number,
        result: Object[],
        _links: Object
      } = {pageIndex: pageIndex, result: [], _links: {}};
      body.pageIndex = pageIndex;
      body.result = pageResult;
      body._links = {
        self: 'url',
      };
      if (offset + pageSize <= result.length) {
        body._links['next'] = url + '?t=' + searchText + '&q=' + q + '&pageIndex=' + (pageIndex + 1);
      }

      return Observable.of(null).mergeMap(() => {
        return Observable.of(new HttpResponse({status: 200, body: body}));
      }).delay(200);
    } else {
      return next.handle(authReq);
    }
  }
}
