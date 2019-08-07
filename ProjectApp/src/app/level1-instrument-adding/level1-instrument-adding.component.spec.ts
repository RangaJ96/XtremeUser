import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1InstrumentAddingComponent } from './level1-instrument-adding.component';

describe('Level1InstrumentAddingComponent', () => {
  let component: Level1InstrumentAddingComponent;
  let fixture: ComponentFixture<Level1InstrumentAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1InstrumentAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1InstrumentAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
