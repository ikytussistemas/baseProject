import { Injectable, Injector } from '@angular/core';
import { BaseService } from './util';
import { Empresa } from '../shared/model/current';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService extends BaseService<Empresa> {
  constructor(protected injector: Injector) {
    super(injector, 'empresas');
   }
}
