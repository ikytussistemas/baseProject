import { NgModule } from '@angular/core';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { ConfigModule } from 'src/app/config/config.module';
import { ListAlunosComponent } from './list-alunos/list-alunos.component';
import { ModalRecordsComponent } from './list-alunos/modal-records/modal-records.component';


@NgModule({
  declarations: [ListAlunosComponent, ModalRecordsComponent],
  imports: [
    ConfigModule,
    DashbordRoutingModule
  ]
})
export class DashbordModule { }
