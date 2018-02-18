import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs/Rx';

import {SideNavComponent} from './side-nav.component';
import {NavButtonComponent} from './nav-button.component';
import {MyRouteManager} from './my-route-manager.service';
import {NavigationNode} from './navigation-node';

describe('SideNavComponent', () => {
  let comp: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  const mockRouteManager = {
    url$: Observable.from([
      // '/dashboard'
    ]),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        SideNavComponent,
        NavButtonComponent,
      ],
      providers: [
        NgClass,
        {
          provide: MyRouteManager,
          useValue: mockRouteManager,
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
    comp.nodes = [
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

  fit('should create', () => {
    expect(comp).toBeTruthy();
  });
});
