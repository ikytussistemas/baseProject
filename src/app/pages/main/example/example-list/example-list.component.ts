import { Component, Injector } from '@angular/core';

import { PersonService } from 'src/app/services';
import { PageListBasic } from 'src/app/shared/abstract';
import { PersonDTO } from 'src/app/shared/model/current/DTO/person-dto';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss']
})
export class ExampleListComponent extends PageListBasic<PersonDTO, PersonService> {

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

}
