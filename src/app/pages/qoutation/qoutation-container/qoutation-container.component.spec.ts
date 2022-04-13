import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutationContainerComponent } from './qoutation-container.component';

describe('QoutationContainerComponent', () => {
  let component: QoutationContainerComponent;
  let fixture: ComponentFixture<QoutationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QoutationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
