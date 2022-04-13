import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutationStatusComponent } from './qoutation-status.component';

describe('QoutationStatusComponent', () => {
  let component: QoutationStatusComponent;
  let fixture: ComponentFixture<QoutationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QoutationStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
