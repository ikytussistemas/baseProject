import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from 'src/app/config/guards/access.guard';
import { ExampleEditComponent } from './example-edit/example-edit.component';

import { ExampleListComponent } from './example-list/example-list.component';

const routes: Routes = [
  { path: '', component: ExampleListComponent },
  {
    path: ':id/add',
    component: ExampleEditComponent,
    canActivate: [AccessGuard],
    data: { roles: ['ROLE_ADM_DFIT', 'ROLE_PROF_DFIT']}
  },
  {
    path: ':id/edit',
    component: ExampleEditComponent,
    canActivate: [AccessGuard],
    data: { roles: ['ROLE_ADM_DFIT', 'ROLE_PROF_DFIT']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
