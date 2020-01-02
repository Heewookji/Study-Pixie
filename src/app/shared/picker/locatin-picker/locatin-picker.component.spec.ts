import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatinPickerComponent } from './locatin-picker.component';

describe('LocatinPickerComponent', () => {
  let component: LocatinPickerComponent;
  let fixture: ComponentFixture<LocatinPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatinPickerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatinPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
