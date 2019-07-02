import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginStationPage } from './origin-station.page';

describe('OriginStationPage', () => {
  let component: OriginStationPage;
  let fixture: ComponentFixture<OriginStationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginStationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginStationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
