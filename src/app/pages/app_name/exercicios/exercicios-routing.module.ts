import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciciosEditComponent } from './exercicios-edit/exercicios-edit.component';
import { ExerciciosListComponent } from './exercicios-list/exercicios-list.component';
import { AccessGuard } from 'src/app/config/access.guard';

const routes: Routes = [
  { path: '', component: ExerciciosListComponent },
  {
    path: ':id/add',
    component: ExerciciosEditComponent,
    canActivate: [AccessGuard],
    data: { roles: ['ROLE_ADM_DFIT', 'ROLE_PROF_DFIT']}
  },
  {
    path: ':id/edit',
    component: ExerciciosEditComponent,
    canActivate: [AccessGuard],
    data: { roles: ['ROLE_ADM_DFIT', 'ROLE_PROF_DFIT']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciciosRoutingModule { }
