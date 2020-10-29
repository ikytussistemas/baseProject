import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Ficha, Treino, Listas, Exercicio } from 'src/app/shared/model/current';
import { ConfirmService } from 'src/app/package/confirm';
import { ExerciciosService } from 'src/app/services';
import { ResponseApi, Filters } from 'src/app/shared/model/util';
import { take } from 'rxjs/operators';
import { ToolsService } from 'src/app/services/util';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'modal-record',
  templateUrl: './modal-record.component.html',
  styleUrls: ['./modal-record.component.scss']
})
export class ModalRecordComponent implements OnInit {

  @Input() records: Ficha[] = [];
  @Output() saveFn = new EventEmitter<any>();

  ficha = new Ficha(null, [], [], null, [], [], null, [], []);
  exercicios: Exercicio[] = [];
  newTreino = new Treino('', '', '', '', '');
  dias = Listas.day;
  dia = '';

  filter = new Filters();

  constructor(
    private auth: AuthService,
    private confirm: ConfirmService,
    private exercicioService: ExerciciosService,
  ) { }

  ngOnInit() {
    this.exercicioService.findAll(this.filter).pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.exercicios = responseApi.data;
    });
  }

  setFicha(ficha: any) {
    this.ficha = ficha;
  }

  statusFicha(ficha: Ficha) {
    ficha.status = !ficha.status;
  }

  addFicha() {
    const hoje = new Date();
    const newFicha = new Ficha(true, [], [], new Date(hoje.getTime() + (90 * 24 * 60 * 60 * 1000)), [], [], new Date(), [], []);
    this.records.push(newFicha);
    this.saveFn.emit(null);
  }

  deleteFicha(ficha: Ficha, message: string) {
    this.confirm.show({
      message: `Deseja deletar ${message}`,
      siFn: () => {
        this.removeFicha(ficha);
      },
    });
  }
  removeFicha(ficha: Ficha) {
    this.records.splice(this.records.indexOf(this.checkFicha(ficha)), 1);
    this.saveFn.emit(null);
  }
  checkFicha(ficha: Ficha): Ficha {
    const fichaFound = this.records.find((f: Ficha) => f.datainicio === ficha.datainicio && f.datareavaliacao === ficha.datareavaliacao);
    return fichaFound;
  }

  addTreino() {
    this.ficha[this.dia].push(this.newTreino);
    this.newTreino = new Treino('', '', '', '', '');
    this.saveFn.emit(null);
  }
  removeTreino(treino: any) {
    this.ficha[treino.dia].splice(this.ficha[treino.dia].indexOf(this.checkTreino(treino.dia, treino.treino)), 1);
    this.saveFn.emit(null);
  }
  checkTreino(dia: string, treino: Treino): Treino {
    const treinoFound = this.ficha[dia].find((f: Treino) => f.exercicio === treino.exercicio);
    return treinoFound;
  }

  permission(permission?: string) {
    return this.auth.getPermission(permission);
  }
}
