import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { PageEditBasic } from 'src/app/shared/abstract';
import { PersonService, UserService } from 'src/app/services';
import { Person, Treino, Ficha } from 'src/app/shared/model/current';
import { ResponseApi } from 'src/app/shared/model/util';
import { ToolsService } from 'src/app/services/util';
import { Avaliacao } from 'src/app/shared/model/current/moldes/avaliacao';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-example-edit',
  templateUrl: './example-edit.component.html',
  styleUrls: ['./example-edit.component.scss']
})
export class ExampleEditComponent extends PageEditBasic<Person, PersonService> {

  avaliacoes: Avaliacao[] = [];
  fichas: Ficha[] = [];
  treinos: Treino[] = [];

  ficha: Ficha;
  treino: Treino;
  aluno: Person;

  constructor(
    protected injector: Injector,
    private personService: PersonService,
    private tools: ToolsService,
    private userService: UserService,
  ) {
    super(injector, personService, 'alunos', '/dfit/alunos');
  }

  async formConstructorById() {
    this.findUser();
    return this.formBuilder.group({
      id: [this.object.id],
      anamnese: [this.object.anamnese],
      celular: [this.object.celular],
      cpf: [this.object.cpf],
      datanascimento: [new Date(this.object.datanascimento).toISOString().substr(0, 10)],
      email: [this.object.email, [Validators.required, Validators.email]],
      ergometria: [this.object.ergometria],
      name: [this.object.name, [Validators.required, Validators.minLength(3)]],
      objetivo: [this.object.objetivo],
      obs: [this.object.obs],
      tipo: [this.object.tipo],
      urlImg: [this.object.urlImg],
    });
  }

  async guardListAttrib() {
    this.fichas = this.object.fichas;
    this.avaliacoes = this.object.avaliacoes;
    this.fichas.sort((a, b) =>
      (a.status > b.status) ?  -1 : (a.status < b.status) ? 1 : 0
    );
    this.avaliacoes.sort((a, b) =>
      (a.dataavaliacao > b.dataavaliacao) ?  1 : (a.dataavaliacao < b.dataavaliacao) ? -1 : 0
    );
  }

  async returnListAttrib() {
    this.object.fichas = this.fichas;
    this.object.avaliacoes = this.avaliacoes;
  }

  async formConstructorNew() {
    return this.formBuilder.group({
      id: [''],
      anamnese: [''],
      celular: [''],
      cpf: [''],
      datanascimento: [''],
      email: [this.tools.getFakeMail(), [Validators.required, Validators.email]],
      ergometria: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      objetivo: [''],
      obs: [''],
      tipo: ['A'],
      urlImg: [''],
    });
  }

  createUser() {
    this.service.createUser(this.object).pipe(take(1)).subscribe((response) => {
      this.findUser();
    });
  }

  findUser() {
    this.userService.findById(this.object.id).subscribe((responseApi: ResponseApi) => {
      this.usuario = responseApi.data;
    }, error => {
        this.usuario = null;
    });
  }
}
