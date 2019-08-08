import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSelectorComponent } from './sign-up-selector.component';

describe('SignUpSelectorComponent', () => {
  let component: SignUpSelectorComponent;
  let fixture: ComponentFixture<SignUpSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
