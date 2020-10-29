import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DfitnessComponent } from './dfitness.component';
import { AuthGuard } from 'src/app/config/guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: DfitnessComponent,
    children: [
      {
        path: 'alunos',
        loadChildren: () => import('../../pages/app_name/alunos/alunos.module').then(m => m.AlunosModule),
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
