import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

const sessionStorageUserDataKey: string = 'userData';

@Injectable({ providedIn: 'root' })
export class UserService {

  private user: BehaviorSubject<SocialUser | null> = new BehaviorSubject<SocialUser | null>(null);

  constructor(private toastr: ToastrService, private authService: SocialAuthService) {
    // At first, maybe an user is stored inside the session storage.
    const userData: string | null = sessionStorage.getItem(sessionStorageUserDataKey);
    if (userData) {this.user.next(JSON.parse(userData) as SocialUser);}
  }

  /**
   * Construct observer to provide at the Auth request method.
   * @returns {Partial<Observer<SocialUser>>}
   */
  observer(): Partial<Observer<SocialUser>> {
    return {
      next: (user: SocialUser): void => {
        if (user) {
          this.user.next(user);
          sessionStorage.setItem(sessionStorageUserDataKey, JSON.stringify(user));
        }
      },
      error: error => this.toastr.error(error),
    };
  }

  /**
   * Provide User information as an Observable object
   * @returns {Observable<SocialUser | null>}
   */
  getUser(): Observable<SocialUser | null> {
    return this.user.asObservable();
  }

  /**
   * Refresh user token for current google account
   */
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  /**
   * Sign out user from current google account
   */
  signOut(): void {
    this.authService.signOut().then(_ => this.toastr.warning('User disconnected'));
    sessionStorage.removeItem(sessionStorageUserDataKey);
  }
}
