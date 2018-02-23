import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurturesComponent } from './nurtures.component';

describe('NurturesComponent', () => {
  let component: NurturesComponent;
  let fixture: ComponentFixture<NurturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
