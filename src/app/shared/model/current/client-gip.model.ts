import { Endereco } from '../util';

export class ClientGip {
  constructor(
    public id: string,
    public identificador: string,
    public nome: string,
    public email: string,
    public empresa: string,
    public tipo: string,
    public status: boolean,

    public sector: string,
    public titulo: string,
    public lattes: string,
    public coordinator: boolean,
    public admission: Date,
    public course: string,
    public period: number,

    public telefone: string,
    public celular: string,
    public endereco: Endereco,
    public rg: string,
    public cpf: string,
    public dataNascimento: Date,
    public urlPerfil: string,
    public obs: string,
  ) { }
}
