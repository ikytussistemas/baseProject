import { Ficha } from './moldes/ficha.model';
import { Avaliacao } from './moldes/avaliacao';

export class Person {
  constructor(
    public id: string,
    public anamnese: string,
    public avaliacoes: Avaliacao[],
    public celular: string,
    public cpf: string,
    public datanascimento: Date,
    public email: string,
    public ergometria: string,
    public fichas: Ficha[],
    public name: string,
    public objetivo: string,
    public obs: string,
    public tipo: string,
    public urlImg: string,
  ) { }
}
