import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyGroupComponent } from './weekly-group.component';

describe('WeeklyGroupComponent', () => {
  let component: WeeklyGroupComponent;
  let fixture: ComponentFixture<WeeklyGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyGroupComponent]
    });
    fixture = TestBed.createComponent(WeeklyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
