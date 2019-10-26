import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAddPage } from './subject-add.page';

describe('SubjectAddPage', () => {
  let component: SubjectAddPage;
  let fixture: ComponentFixture<SubjectAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
