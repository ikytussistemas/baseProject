import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { take } from 'rxjs/operators';

import { PageEditBasic } from 'src/app/shared/abstract';
import { Exercicio, Listas } from 'src/app/shared/model/current';
import { ExerciciosService } from 'src/app/services';
import { ResponseApi } from 'src/app/shared/model/util';

@Component({
  selector: 'app-exercicios-edit',
  templateUrl: './exercicios-edit.component.html',
  styleUrls: ['./exercicios-edit.component.scss']
})
export class ExerciciosEditComponent extends PageEditBasic<Exercicio, ExerciciosService> {

  alvos = Listas.Targets;

  constructor(
    protected injector: Injector,
    private exerciciosService: ExerciciosService
  ) {
    super(injector, exerciciosService, 'exercicios', '/dfit/exercicios');
  }

  async formConstructorById() {
    return this.formBuilder.group({
      id: [this.object.id],
      description: [this.object.description, [Validators.required, Validators.minLength(3)]],
      name: [this.object.name, [Validators.required, Validators.minLength(3)]],
      target: [this.object.target],
      urlImg: [this.object.urlImg],
    });
  }

  async formConstructorNew() {
   // this.saveExercicios();
    return this.formBuilder.group({
      id: [''],
      description: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      target: [''],
      urlImg: [''],
    });
  }

  saveExercicios() {
    this.service.getExercicios().subscribe(response => {
      for (const ex of response) {
        // tslint:disable-next-line: no-string-literal
        const exer = new Exercicio(null, ex['descricao'], ex['nome'], ex['alvoexercicio'], '');
        this.service.createOrUpdate(exer).subscribe((resp: ResponseApi) => { });
      }
    });
  }
}
