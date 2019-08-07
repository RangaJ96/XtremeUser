import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLevel0Component } from './profile-level0.component';

describe('ProfileLevel0Component', () => {
  let component: ProfileLevel0Component;
  let fixture: ComponentFixture<ProfileLevel0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLevel0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLevel0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
