import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTypesComponent } from './ad-types.component';

describe('AdTypesComponent', () => {
  let component: AdTypesComponent;
  let fixture: ComponentFixture<AdTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
