import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosEditComponent } from './alunos-edit/alunos-edit.component';
import { AlunosListComponent } from './alunos-list/alunos-list.component';
import { AccessGuard } from 'src/app/config/access.guard';

const routes: Routes = [
  {
    path: '',
    component: AlunosListComponent
  },
  {
    path: ':id/add',
    component: AlunosEditComponent,
    canActivate: [AccessGuard],
    data: { roles: ['ROLE_ADM_DFIT', 'ROLE_PROF_DFIT']}
  },
  {
    path: ':id/edit',
    component: AlunosEditComponent,
    canActivate: [AccessGuard],
    data: { roles: ['ROLE_ADM_DFIT', 'ROLE_PROF_DFIT']}
        },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
