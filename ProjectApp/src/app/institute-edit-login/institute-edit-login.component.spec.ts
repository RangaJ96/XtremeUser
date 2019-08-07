import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteEditLoginComponent } from './institute-edit-login.component';

describe('InstituteEditLoginComponent', () => {
  let component: InstituteEditLoginComponent;
  let fixture: ComponentFixture<InstituteEditLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteEditLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteEditLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
