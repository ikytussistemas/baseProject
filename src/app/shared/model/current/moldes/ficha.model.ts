import { Treino } from './treino.model';

export class Ficha {
  constructor(
    public status: boolean,
    public seg: Treino[],
    public sab: Treino[],
    public datareavaliacao: Date,
    public sex: Treino[],
    public qua: Treino[],
    public datainicio: Date,
    public qui: Treino[],
    public ter: Treino[],
  ) { }
}
