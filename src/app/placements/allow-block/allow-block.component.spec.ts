import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowBlockComponent } from './allow-block.component';

describe('AllowBlockComponent', () => {
  let component: AllowBlockComponent;
  let fixture: ComponentFixture<AllowBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
