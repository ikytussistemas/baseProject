import { Component, OnInit, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { PageEditBasic } from 'src/app/shared/abstract';
import { Person, User } from 'src/app/shared/model/current';
import { PersonService, UserService } from 'src/app/services';
import { ToolsService } from 'src/app/services/util';
import { ResponseApi } from 'src/app/shared/model/util';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-instrutores-edit',
  templateUrl: './instrutores-edit.component.html',
  styleUrls: ['./instrutores-edit.component.scss']
})
export class InstrutoresEditComponent extends PageEditBasic<Person, PersonService> {



  constructor(
    protected injector: Injector,
    private personService: PersonService,
    public userService: UserService,
    private tools: ToolsService,
  ) {
    super(injector, personService, 'professores', '/dfit/instrutores');
  }

  async formConstructorById() {
    this.findUser();
    return this.formBuilder.group({
      id: [this.object.id],
      celular: [this.object.celular],
      cpf: [this.object.cpf],
      datanascimento: [new Date(this.object.datanascimento).toISOString().substr(0, 10)],
      email: [this.object.email, [Validators.required, Validators.email]],
      name: [this.object.name, [Validators.required, Validators.minLength(3)]],
      obs: [this.object.obs],
      tipo: [this.object.tipo],
      urlImg: [this.object.urlImg],
    });
  }

  async formConstructorNew() {
    return this.formBuilder.group({
      id: [''],
      celular: [''],
      cpf: [''],
      datanascimento: [''],
      email: [this.tools.getFakeMail(), [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      obs: [''],
      tipo: ['P'],
      urlImg: [''],
    });
  }

  createUser() {
    this.service.createUser(this.object).pipe(take(1)).subscribe((response) => {
    });
  }

  findUser() {
    this.userService.findById(this.object.id).subscribe((responseApi: ResponseApi) => {
      this.usuario = responseApi.data;
    }, error => {
        this.usuario = null;
        this.toast.danger(this.handleError(error));
    });
  }
}
