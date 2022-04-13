import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQoutationsComponent } from './view-qoutations.component';

describe('ViewQoutationsComponent', () => {
  let component: ViewQoutationsComponent;
  let fixture: ComponentFixture<ViewQoutationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQoutationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQoutationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
