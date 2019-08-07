import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level0AddLevel1Component } from './level0-add-level1.component';

describe('Level0AddLevel1Component', () => {
  let component: Level0AddLevel1Component;
  let fixture: ComponentFixture<Level0AddLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level0AddLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level0AddLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
