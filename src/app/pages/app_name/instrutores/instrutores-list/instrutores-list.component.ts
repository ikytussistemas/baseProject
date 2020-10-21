import { Component, OnInit, Injector } from '@angular/core';

import { PageListBasic } from 'src/app/shared/abstract';
import { PersonDTO } from 'src/app/shared/model/current/DTO/person-dto';
import { PersonService } from 'src/app/services';

@Component({
  selector: 'app-instrutores-list',
  templateUrl: './instrutores-list.component.html',
  styleUrls: ['./instrutores-list.component.scss']
})
export class InstrutoresListComponent extends PageListBasic<PersonDTO, PersonService> {

  constructor(
    protected injector: Injector,
    private personService: PersonService
  ) {
    super(injector, personService);
    this.filter.tipo = 'P';
  }

  async transformObjects() {
    return this.list;
  }

}
