export class User {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public senha: string,
    public permissoes: string[],
    public empresa: string,
    public ativo: boolean,
  ) { }
}
