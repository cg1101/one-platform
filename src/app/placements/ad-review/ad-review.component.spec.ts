import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdReviewComponent } from './ad-review.component';

describe('AdReviewComponent', () => {
  let component: AdReviewComponent;
  let fixture: ComponentFixture<AdReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
