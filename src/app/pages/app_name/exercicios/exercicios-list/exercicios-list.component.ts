import { Component, OnInit, Injector } from '@angular/core';

import { PageListBasic } from 'src/app/shared/abstract';
import { ExerciciosService } from 'src/app/services';
import { Exercicio, Listas } from 'src/app/shared/model/current';

@Component({
  selector: 'app-exercicios-list',
  templateUrl: './exercicios-list.component.html',
  styleUrls: ['./exercicios-list.component.scss']
})
export class ExerciciosListComponent extends PageListBasic<Exercicio, ExerciciosService> {

  targets = Listas.Targets;

  constructor(
    protected injector: Injector,
    private exerciciosService: ExerciciosService
  ) {
    super(injector, exerciciosService);
  }

  async transformObjects() {
    return this.list;
  }

}
