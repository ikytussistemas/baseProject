export class ClientDTO {
  constructor(
    public id: string,
    public identificador: string,
    public celular: string,
    public email: string,
    public nome: string,
    public urlPerfil: string,
    public titulo: string,
    public periodo: number,
    public curso: string,
  ) { }
}
