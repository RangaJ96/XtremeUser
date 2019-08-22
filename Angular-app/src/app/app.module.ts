import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { IndexComponent } from './index/index.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationsComponent } from './reservations/reservations.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { InstrumentsGalleryComponent } from './instruments-gallery/instruments-gallery.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { DemoMaterialModule } from './material-module';
import { RatedGalareyComponent } from './rated-galarey/rated-galarey.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('561602290896109')
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider('78iqy5cu2e1fgr')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    IndexComponent,
    CommonHeaderComponent,
    NavigationBarComponent,
    SocialLoginComponent,
    ReservationsComponent,
    PaymentHistoryComponent,
    InstrumentsGalleryComponent,
    AdminDashbordComponent,
    RatedGalareyComponent,
    EditUserProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    DemoMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    httpInterceptorProviders,
      {
        //httpInterceptorProviders,
        provide: AuthServiceConfig,
        useFactory: provideConfig
      } 
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
