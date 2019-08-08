import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';

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
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { DirectSignUpComponent } from './direct-sign-up/direct-sign-up.component';
import { EditProfileLevel0Component } from './edit-profile-level0/edit-profile-level0.component';
import { EditProfileLevel1Component } from './edit-profile-level1/edit-profile-level1.component';
import { EditProfileLevel2Component } from './edit-profile-level2/edit-profile-level2.component';
import { InstituteEditLoginComponent } from './institute-edit-login/institute-edit-login.component';
import { InstituteProfileComponent } from './institute-profile/institute-profile.component';
import { Level0AddLevel1Component } from './level0-add-level1/level0-add-level1.component';
import { Level0EditLoginComponent } from './level0-edit-login/level0-edit-login.component';
import { Level0ViewInstrumentsComponent } from './level0-view-instruments/level0-view-instruments.component';
import { Level1AddLevel2Component } from './level1-add-level2/level1-add-level2.component';
import { Level1EditLoginComponent } from './level1-edit-login/level1-edit-login.component';
import { Level1InstrumentAddingComponent } from './level1-instrument-adding/level1-instrument-adding.component';
import { Level1ManageInstrumentsComponent } from './level1-manage-instruments/level1-manage-instruments.component';
import { Level2EditLoginComponent } from './level2-edit-login/level2-edit-login.component';
import { Level2ViewInstrumentsComponent } from './level2-view-instruments/level2-view-instruments.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ProfileLevel0Component } from './profile-level0/profile-level0.component';
import { ProfileLevel1Component } from './profile-level1/profile-level1.component';
import { ProfileLevel2Component } from './profile-level2/profile-level2.component';
import { PublicInstituteComponent } from './public-institute/public-institute.component';
import { SignComponent } from './sign/sign.component';
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpSelectorComponent } from './sign-up-selector/sign-up-selector.component';
import { EditProfileInstituteComponent } from './edit-profile-institute/edit-profile-institute.component';


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
    AdminProfileComponent,
    DirectSignUpComponent,
    EditProfileLevel0Component,
    EditProfileLevel1Component,
    EditProfileLevel2Component,
    InstituteEditLoginComponent,
    InstituteProfileComponent,
    Level0AddLevel1Component,
    Level0EditLoginComponent,
    Level0ViewInstrumentsComponent,
    Level1AddLevel2Component,
    Level1EditLoginComponent,
    Level1InstrumentAddingComponent,
    Level1ManageInstrumentsComponent,
    Level2EditLoginComponent,
    Level2ViewInstrumentsComponent,
    ProfileAdminComponent,
    ProfileLevel0Component,
    ProfileLevel1Component,
    ProfileLevel2Component,
    PublicInstituteComponent,
    SignComponent,
    SigninComponent,
    SignUpComponent,
    SignUpSelectorComponent,
    EditProfileInstituteComponent,
    
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
    MatIconModule
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
