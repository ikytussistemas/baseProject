import { Injectable, Injector } from '@angular/core';

import { BaseService } from './util';
import { Person } from '../shared/model/current';
import { Avaliacao } from '../shared/model/current/moldes/avaliacao';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseService<Person> {
  url = '../../assets/dados/dfitness.json';
  urlAva = '../../assets/dados/avaliacoes.json';

  constructor(protected injector: Injector) {
    super(injector, 'persons');
   }

   createUser(person: Person) {
     return this.http.post(`${this.urlResouce}/user`, person);
   }

   getExercicios() {
     return this.http.get<Person[]>(this.url);
   }

   getAval() {
     return this.http.get<Avaliacao[]>(this.urlAva);
   }
}
