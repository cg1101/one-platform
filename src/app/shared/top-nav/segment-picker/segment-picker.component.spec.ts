import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentPickerComponent } from './segment-picker.component';

describe('SegmentPickerComponent', () => {
  let component: SegmentPickerComponent;
  let fixture: ComponentFixture<SegmentPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
