import { NgModule } from '@angular/core';
import { ModalUserComponent } from './modal-user/modal-user.component';
import { ModalRecordComponent } from './modal-record/modal-record.component';
import { ModalAvalComponent } from './modal-aval/modal-aval.component';
import { TableTreinoComponent } from './modal-record/table-treino/table-treino.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [ModalAvalComponent, ModalRecordComponent, ModalUserComponent, TableTreinoComponent],
  exports: [ModalAvalComponent, ModalRecordComponent, ModalUserComponent, TableTreinoComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
  ]
})
export class ModaisModule { }
