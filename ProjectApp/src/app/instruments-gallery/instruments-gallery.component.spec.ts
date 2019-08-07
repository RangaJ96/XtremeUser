import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsGalleryComponent } from './instruments-gallery.component';

describe('InstrumentsGalleryComponent', () => {
  let component: InstrumentsGalleryComponent;
  let fixture: ComponentFixture<InstrumentsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
