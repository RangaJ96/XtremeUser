import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLevel1Component } from './profile-level1.component';

describe('ProfileLevel1Component', () => {
  let component: ProfileLevel1Component;
  let fixture: ComponentFixture<ProfileLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
