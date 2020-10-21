import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/layout/home/home.component';
import { LoginComponent } from 'src/app/security/login/login.component';
import { AuthGuard } from '../auth.guard';
import { HomeAlunoComponent } from 'src/app/layout/home-aluno/home-aluno.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeAlunoComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'admin',
        loadChildren: () => import('../../pages/admin/admin.module').then( m => m.AdminModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'dfit',
        loadChildren: () => import('../../pages/dfitness/dfitness.module').then(m => m.DfitnessModule),
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
