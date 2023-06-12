import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyIdeasComponent } from './weekly-ideas.component';

describe('WeeklyIdeasComponent', () => {
  let component: WeeklyIdeasComponent;
  let fixture: ComponentFixture<WeeklyIdeasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyIdeasComponent]
    });
    fixture = TestBed.createComponent(WeeklyIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
