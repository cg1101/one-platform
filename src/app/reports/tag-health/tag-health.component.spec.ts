import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagHealthComponent } from './tag-health.component';

describe('TagHealthComponent', () => {
  let component: TagHealthComponent;
  let fixture: ComponentFixture<TagHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
