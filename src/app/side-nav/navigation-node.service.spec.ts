import { TestBed, inject } from '@angular/core/testing';

import { NavigationNodeService } from './navigation-node.service';

describe('NavigationNodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationNodeService]
    });
  });

  it('should be created', inject([NavigationNodeService], (service: NavigationNodeService) => {
    expect(service).toBeTruthy();
  }));
});
