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
import { IdeaComponent } from 'src/app/pages/weekly-ideas/idea.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserMenuComponent } from './components/navbar/user-menu/user-menu.component';
import { GraphQLModule } from './graphql.module';
import { ConfigComponent } from './pages/config/config.component';
import { WeeklyGroupComponent } from './pages/weekly-group/weekly-group.component';
import { WeeklyIdeasComponent } from './pages/weekly-ideas/weekly-ideas.component';

@NgModule({
            declarations: [
              AppComponent,
              NavbarComponent,
              WeeklyGroupComponent,
              ConfigComponent,
              UserMenuComponent,
              WeeklyIdeasComponent,
              IdeaComponent,
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              SocialLoginModule,
              GoogleSigninButtonModule,
              NgOptimizedImage,
              BrowserAnimationsModule, // required animations module
              ToastrModule.forRoot(), // ToastrModule added
              HttpClientModule, GraphQLModule,
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
                        '1094981202974-ul7a7b9dr2pokenr0neiae7lq2md684b.apps.googleusercontent.com',
                      ),
                    },
                  ],
                } as SocialAuthServiceConfig,
              },
            ],
            bootstrap: [ AppComponent ],
          })
export class AppModule {}
