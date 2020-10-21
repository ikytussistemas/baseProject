import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DfitnessComponent } from './dfitness.component';
import { AuthGuard } from 'src/app/config/auth.guard';


const routes: Routes = [
  {
    path: '', component: DfitnessComponent,
    children: [
      {
        path: 'alunos',
        loadChildren: () => import('../../pages/dfitness/alunos/alunos.module').then(m => m.AlunosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'exercicios',
        loadChildren: () => import('../../pages/dfitness/exercicios/exercicios.module').then(m => m.ExerciciosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'instrutores',
        loadChildren: () => import('../../pages/dfitness/instrutores/instrutores.module').then(m => m.InstrutoresModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'dash',
        loadChildren: () => import('../../pages/dfitness/dashbord/dashbord.module').then(m => m.DashbordModule),
        canActivate: [AuthGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DfitnessRoutingModule { }
