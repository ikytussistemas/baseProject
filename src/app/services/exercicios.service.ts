import { Injectable, Injector } from '@angular/core';

import { BaseService } from './util';
import { Exercicio } from '../shared/model/current';

@Injectable({
  providedIn: 'root'
})
export class ExerciciosService extends BaseService<Exercicio> {
  url = '../../assets/dados/exercicios.json';

  constructor(protected injector: Injector) {
    super(injector, 'exercicios');
   }

   getExercicios() {
     return this.http.get<[]>(this.url);
   }
}
