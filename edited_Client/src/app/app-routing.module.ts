import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { InstrumentsGalleryComponent } from './instruments-gallery/instruments-gallery.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { InstituteProfileComponent } from './institute-profile/institute-profile.component';
import { ProfileLevel0Component } from './profile-level0/profile-level0.component';
import { DirectSignUpComponent } from './direct-sign-up/direct-sign-up.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Level1InstrumentAddingComponent } from './level1-instrument-adding/level1-instrument-adding.component';
import { ProfileLevel2Component } from './profile-level2/profile-level2.component';
import { ProfileLevel1Component } from './profile-level1/profile-level1.component';

const routes: Routes = [
    {
        path: '',
         redirectTo: 'index',
         //component:IndexComponent,
         pathMatch: 'full'
     },
    {
        path:'index',
        component: IndexComponent
    },
    
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'auth/login/home',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'rec',
        component: ReservationsComponent
    },
    {
        path: 'instr',
        component: InstrumentsGalleryComponent
    },
    
  {path:'adminp',component:AdminProfileComponent},
  {path:'institute',component:InstituteProfileComponent},
  {path:'level0',component:ProfileLevel0Component},
  {path:'level1',component:ProfileLevel1Component},
  {path:'level2',component:ProfileLevel2Component},
  {path:'add/instrument',component:Level1InstrumentAddingComponent},
  {path:'register/:name',component:SignUpComponent},
  {path:'profile',component:InstituteProfileComponent},
  {path:'request',component:DirectSignUpComponent} 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
