import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1EditLoginComponent } from './level1-edit-login.component';

describe('Level1EditLoginComponent', () => {
  let component: Level1EditLoginComponent;
  let fixture: ComponentFixture<Level1EditLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1EditLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1EditLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
