import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLevel2Component } from './profile-level2.component';

describe('ProfileLevel2Component', () => {
  let component: ProfileLevel2Component;
  let fixture: ComponentFixture<ProfileLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
