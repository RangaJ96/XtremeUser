import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2EditLoginComponent } from './level2-edit-login.component';

describe('Level2EditLoginComponent', () => {
  let component: Level2EditLoginComponent;
  let fixture: ComponentFixture<Level2EditLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2EditLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2EditLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
