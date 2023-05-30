import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserMenuComponent } from './navbar/user-menu/user-menu.component';
import { WeeklyGroupComponent } from './weekly-group/weekly-group.component';

@NgModule({
            declarations: [
              AppComponent,
              NavbarComponent,
              WeeklyGroupComponent,
              ConfigComponent,
              UserMenuComponent,
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              SocialLoginModule,
              GoogleSigninButtonModule,
              NgOptimizedImage,
              BrowserAnimationsModule, // required animations module
              ToastrModule.forRoot(), // ToastrModule added
              HttpClientModule,
            ],
            providers: [
              {
                provide: 'SocialAuthServiceConfig',
                useValue: {
                  autoLogin: false,
                  providers: [
                    {
                      id: GoogleLoginProvider.PROVIDER_ID,
                      provider: new GoogleLoginProvider(
                        '',
                      ),
                    },
                  ],
                } as SocialAuthServiceConfig,
              },
            ],
            bootstrap: [ AppComponent ],
          })
export class AppModule {}
