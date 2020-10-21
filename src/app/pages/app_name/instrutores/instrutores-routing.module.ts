import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrutoresEditComponent } from './instrutores-edit/instrutores-edit.component';
import { InstrutoresListComponent } from './instrutores-list/instrutores-list.component';

const routes: Routes = [
  { path: '', component: InstrutoresListComponent },
  { path: ':id/add', component: InstrutoresEditComponent },
  { path: ':id/edit', component: InstrutoresEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrutoresRoutingModule { }
