import { Endereco } from '../util';

export class Empresa {
  constructor(
    public id: string,
    public nome: string,
    public telefone: string,
    public email: string,
    public endereco: Endereco,
    public cnpj: string,
    public tipo: string,
    public matriz: string,
    public urlLogo: string,
  ) { }
}
