import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level0EditLoginComponent } from './level0-edit-login.component';

describe('Level0EditLoginComponent', () => {
  let component: Level0EditLoginComponent;
  let fixture: ComponentFixture<Level0EditLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level0EditLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level0EditLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
