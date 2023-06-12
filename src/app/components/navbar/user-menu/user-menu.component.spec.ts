import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuComponent } from 'src/app/components/navbar/user-menu/user-menu.component';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
                                     declarations: [ UserMenuComponent ],
                                   });
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
