import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotTabComponent } from './pivot-tab.component';

describe('PivotTabComponent', () => {
  let component: PivotTabComponent;
  let fixture: ComponentFixture<PivotTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
