import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
             selector: 'app-navbar',
             templateUrl: './navbar.component.html',
             styleUrls: [ './navbar.component.scss' ],
           })
export class NavbarComponent implements OnInit {

  user: SocialUser | null = null;

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
