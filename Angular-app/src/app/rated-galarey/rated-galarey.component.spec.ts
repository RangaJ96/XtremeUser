import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedGalareyComponent } from './rated-galarey.component';

describe('RatedGalareyComponent', () => {
  let component: RatedGalareyComponent;
  let fixture: ComponentFixture<RatedGalareyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatedGalareyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedGalareyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
