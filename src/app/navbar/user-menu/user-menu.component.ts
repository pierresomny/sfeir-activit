import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
             selector: 'app-user-menu',
             templateUrl: './user-menu.component.html',
             styleUrls: [ './user-menu.component.scss' ],
           })
export class UserMenuComponent implements OnInit {

  user: SocialUser | null = null;
  signOut: () => void = this.userService.signOut;

  constructor(public userService: UserService,
              private authService: SocialAuthService) {
  }

  ngOnInit(): void {
    this.authService.authState.subscribe(this.userService.observer());
    this.userService.getUser().subscribe((user: SocialUser | null): void => {
      this.user = user;
    });
  }

}
