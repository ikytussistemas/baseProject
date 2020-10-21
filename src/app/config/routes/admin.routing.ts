import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from 'src/app/pages/admin/admin.component';
import { EmpresasListComponent } from '../../pages/admin/empresas/empresas-list/empresas-list.component';
import { EmpresasEditComponent } from '../../pages/admin/empresas/empresas-edit/empresas-edit.component';
import { UsuariosListComponent } from '../../pages/admin/usuarios/usuarios-list/usuarios-list.component';
import { UsuariosEditComponent } from '../../pages/admin/usuarios/usuarios-edit/usuarios-edit.component';

const adminRoutes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'empresas', component: EmpresasListComponent },
      { path: 'empresas/:id/add', component: EmpresasEditComponent },
      { path: 'empresas/:id/edit', component: EmpresasEditComponent },

      { path: 'usuarios', component: UsuariosListComponent },
      { path: 'usuarios/:id/add', component: UsuariosEditComponent },
      { path: 'usuarios/:id/edit', component: UsuariosEditComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
