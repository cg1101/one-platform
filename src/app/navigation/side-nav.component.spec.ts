import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {SideNavComponent} from './side-nav.component';
import {MyRouteManager} from './my-route-manager.service';
import {NavigationNode} from './navigation-node';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  const mockRouteManager = {
    url$: new Subject(),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideNavComponent,
      ],
      providers: [
        {
          provide: MyRouteManager,
          useValue: mockRouteManager,
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    component.nodes = [
      (<NavigationNode>{
        path: '/dashboard',
        label: 'Dashboard',
        icon: 'dashboard',
        link: '/dashboard',
      }),
      (<NavigationNode>{
        path: '/campaign',
        label: 'Campaigns',
        icon: 'campaign',
        link: '/campaigns',
      }),
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
