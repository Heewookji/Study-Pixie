import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiesPage } from './pixies.page';

describe('PixiesPage', () => {
  let component: PixiesPage;
  let fixture: ComponentFixture<PixiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
