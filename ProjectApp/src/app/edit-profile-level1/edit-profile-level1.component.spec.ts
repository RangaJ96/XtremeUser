import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileLevel1Component } from './edit-profile-level1.component';

describe('EditProfileLevel1Component', () => {
  let component: EditProfileLevel1Component;
  let fixture: ComponentFixture<EditProfileLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
