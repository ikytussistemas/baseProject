import { NgModule } from '@angular/core';

import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { ExerciciosEditComponent } from './exercicios-edit/exercicios-edit.component';
import { ExerciciosListComponent } from './exercicios-list/exercicios-list.component';
import { ConfigModule } from 'src/app/config/config.module';


@NgModule({
  declarations: [ExerciciosEditComponent, ExerciciosListComponent],
  imports: [
    ConfigModule,
    ExerciciosRoutingModule
  ]
})
export class ExerciciosModule { }
