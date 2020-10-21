import { Component, OnInit, Injector } from '@angular/core';

import { PageListBasic } from 'src/app/shared/abstract';
import { PersonDTO } from 'src/app/shared/model/current/DTO/person-dto';
import { PersonService } from 'src/app/services';
import { take } from 'rxjs/operators';
import { ResponseApi } from 'src/app/shared/model/util';
import { Ficha } from '../../../../shared/model/current/moldes/ficha.model';


@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.scss']
})
export class ListAlunosComponent extends PageListBasic<PersonDTO, PersonService> {

  fichas: Ficha[] = [];

  constructor(
    protected injector: Injector,
    private personService: PersonService
  ) {
    super(injector, personService);
    this.filter.tipo = 'A';
  }

  async transformObjects() {
    return this.list;
  }

  getAluno(id: string) {
    this.service.findById(id).pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.fichas = responseApi.data.fichas;
    });
  }

}
