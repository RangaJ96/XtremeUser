import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileLevel2Component } from './edit-profile-level2.component';

describe('EditProfileLevel2Component', () => {
  let component: EditProfileLevel2Component;
  let fixture: ComponentFixture<EditProfileLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
