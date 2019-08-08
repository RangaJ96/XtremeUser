import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicInstituteComponent } from './public-institute.component';

describe('PublicInstituteComponent', () => {
  let component: PublicInstituteComponent;
  let fixture: ComponentFixture<PublicInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
