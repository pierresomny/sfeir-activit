import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaComponent } from 'src/app/pages/weekly-ideas/idea.component';

describe('IdeaComponent', () => {
  let component: IdeaComponent;
  let fixture: ComponentFixture<IdeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
                                     declarations: [ IdeaComponent ],
                                   });
    fixture = TestBed.createComponent(IdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
