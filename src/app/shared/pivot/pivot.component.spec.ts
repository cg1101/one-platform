import {DebugElement} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

import {PivotComponent} from './pivot.component';

describe('PivotGuideComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PivotComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  describe('when the component is initialised', () => {
    let fixture: ComponentFixture<PivotComponent>;
    let comp: PivotComponent;
    let de: DebugElement;
    beforeEach(() => {
      // setup test component instance
      fixture = TestBed.createComponent(PivotComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement;
    });

    it('should be defined', () => {
      expect(comp).toBeDefined();
    });

    describe('when initialised with a label', () => {

      it('should contain one label', () => {
        comp.label = 'View By:';
        fixture.detectChanges();
        expect(de.queryAll(By.css('.label')).length).toEqual(1);
      });

      it('should contain no label if label text is empty', () => {
        comp.label = '';
        fixture.detectChanges();
        expect(de.queryAll(By.css('.label')).length).toEqual(0);
      });

      it('should contain no label if mobileMode is on', () => {
        comp.label = 'View By:';
        comp.mobileMode = true;
        fixture.detectChanges();
        expect(de.queryAll(By.css('.label')).length).toEqual(0);
      });
    });
  });



});
