import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EstadoBr, Cidade } from 'src/app/shared/model/util';



@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  urlCidades = '../../../assets/dados/cidades.json';
  urlEstados = '../../../assets/dados/estadosbr.json';

  dfit = '../../../assets/dados/dfitness.json';

  consultaCEP(cep: string) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }
    return of({});
  }

  getEstadosBr() {
    return this.http.get<EstadoBr[]>(this.urlEstados);
  }

  getCidades(idEstado: number) {
    return this.http.get<Cidade[]>(this.urlCidades)
      .pipe(
        // tslint:disable-next-line:triple-equals
        map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
      );
  }

  getCidadeNome(cidade) {
    return this.http.get<Cidade[]>(this.urlCidades)
      .pipe(
        map((cidades: Cidade[]) => cidades.filter(c => c.nome === cidade))
      );
  }

  getDados() {
    return this.http.get(this.dfit).subscribe((dados) => {
      console.log(dados[0]);
    });
  }
}
