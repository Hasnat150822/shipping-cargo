import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutationDetailsComponent } from './qoutation-details.component';

describe('QoutationDetailsComponent', () => {
  let component: QoutationDetailsComponent;
  let fixture: ComponentFixture<QoutationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QoutationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
