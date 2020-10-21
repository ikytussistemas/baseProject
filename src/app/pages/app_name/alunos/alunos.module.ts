import { NgModule } from '@angular/core';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosListComponent } from './alunos-list/alunos-list.component';
import { AlunosEditComponent } from './alunos-edit/alunos-edit.component';
import { ConfigModule } from 'src/app/config/config.module';
import { ModaisModule } from '../modais/modais.module';


@NgModule({
  declarations: [AlunosListComponent, AlunosEditComponent],
  imports: [
    AlunosRoutingModule,
    ConfigModule,
    ModaisModule,
  ]
})
export class AlunosModule { }
