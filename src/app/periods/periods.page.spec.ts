import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodsPage } from './periods.page';

describe('PeriodsPage', () => {
  let component: PeriodsPage;
  let fixture: ComponentFixture<PeriodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
