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

const routes: Routes = [
    
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
    {
       path: '',
        redirectTo: 'index',
        //component:IndexComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
