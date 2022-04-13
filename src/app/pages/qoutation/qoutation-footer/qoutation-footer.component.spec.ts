import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutationFooterComponent } from './qoutation-footer.component';

describe('QoutationFooterComponent', () => {
  let component: QoutationFooterComponent;
  let fixture: ComponentFixture<QoutationFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QoutationFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
