import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlunosComponent } from './list-alunos/list-alunos.component';


const routes: Routes = [
  {
    path: '',
    component: ListAlunosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
