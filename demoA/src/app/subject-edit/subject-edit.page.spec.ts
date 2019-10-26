import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEditPage } from './subject-edit.page';

describe('SubjectEditPage', () => {
  let component: SubjectEditPage;
  let fixture: ComponentFixture<SubjectEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
