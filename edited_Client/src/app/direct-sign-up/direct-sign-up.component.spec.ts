import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectSignUpComponent } from './direct-sign-up.component';

describe('DirectSignUpComponent', () => {
  let component: DirectSignUpComponent;
  let fixture: ComponentFixture<DirectSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
