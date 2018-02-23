import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLimitsComponent } from './ad-limits.component';

describe('AdLimitsComponent', () => {
  let component: AdLimitsComponent;
  let fixture: ComponentFixture<AdLimitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdLimitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
