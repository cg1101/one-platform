import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFieldsComponent } from './basic-fields.component';

describe('BasicFieldsComponent', () => {
  let component: BasicFieldsComponent;
  let fixture: ComponentFixture<BasicFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
