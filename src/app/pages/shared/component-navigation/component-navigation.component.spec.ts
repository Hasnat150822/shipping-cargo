import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNavigationComponent } from './component-navigation.component';

describe('ComponentNavigationComponent', () => {
  let component: ComponentNavigationComponent;
  let fixture: ComponentFixture<ComponentNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
