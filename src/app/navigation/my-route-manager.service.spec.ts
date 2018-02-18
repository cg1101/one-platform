import { TestBed, inject } from '@angular/core/testing';

import { MyRouteManager } from './my-route-manager.service';

describe('RouteObserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyRouteManager]
    });
  });

  it('should be created', inject([MyRouteManager], (service: MyRouteManager) => {
    expect(service).toBeTruthy();
  }));
});
