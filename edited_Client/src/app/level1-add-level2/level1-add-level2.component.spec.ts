import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1AddLevel2Component } from './level1-add-level2.component';

describe('Level1AddLevel2Component', () => {
  let component: Level1AddLevel2Component;
  let fixture: ComponentFixture<Level1AddLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1AddLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1AddLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
