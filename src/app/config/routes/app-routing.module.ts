import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/layout/home/home.component';

import { LoginComponent } from 'src/app/security/login/login.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [

  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'main',
        loadChildren: () => import('../../pages/main/main.module').then(m => m.MainModule),
        canActivate: [AuthGuard]
      },

    ]
  },
   { path: 'login', component: LoginComponent},
   { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
