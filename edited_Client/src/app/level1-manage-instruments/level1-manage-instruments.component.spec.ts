import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1ManageInstrumentsComponent } from './level1-manage-instruments.component';

describe('Level1ManageInstrumentsComponent', () => {
  let component: Level1ManageInstrumentsComponent;
  let fixture: ComponentFixture<Level1ManageInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1ManageInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1ManageInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
