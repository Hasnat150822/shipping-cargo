import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQoutationComponent } from './single-qoutation.component';

describe('SingleQoutationComponent', () => {
  let component: SingleQoutationComponent;
  let fixture: ComponentFixture<SingleQoutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleQoutationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleQoutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
