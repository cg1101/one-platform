import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {TopNavComponent} from './top-nav.component';
import {TopNavDataService} from '../../core/top-nav-data.service';
import {SearchService} from '../../core/search.service';
describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopNavComponent],
      imports: [HttpClientTestingModule],
      providers: [
        TopNavDataService,
        SearchService,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
