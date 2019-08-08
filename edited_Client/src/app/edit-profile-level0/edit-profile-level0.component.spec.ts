import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileLevel0Component } from './edit-profile-level0.component';

describe('EditProfileLevel0Component', () => {
  let component: EditProfileLevel0Component;
  let fixture: ComponentFixture<EditProfileLevel0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileLevel0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileLevel0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
