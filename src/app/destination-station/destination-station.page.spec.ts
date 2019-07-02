import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationStationPage } from './destination-station.page';

describe('DestinationStationPage', () => {
  let component: DestinationStationPage;
  let fixture: ComponentFixture<DestinationStationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationStationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationStationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
