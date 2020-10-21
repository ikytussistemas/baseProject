import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Avaliacao } from 'src/app/shared/model/current/moldes/avaliacao';
import { AuthService } from 'src/app/security/auth.service';
import { ToolsService } from 'src/app/services/util';
import { ConfirmService } from 'src/app/package/confirm';

@Component({
  selector: 'modal-aval',
  templateUrl: './modal-aval.component.html',
  styleUrls: ['./modal-aval.component.scss']
})
export class ModalAvalComponent implements OnInit {

  @Input() avaliacoes: Avaliacao[] = [];
  @Output() saveFn = new EventEmitter<any>();

  avaliacao = this.getNewAv(new Date());

  constructor(
    private tools: ToolsService,
    private confirm: ConfirmService,
  ) { }

  ngOnInit() {
  }

  setAvaliacao(avaliacao: Avaliacao) {
    this.avaliacao = avaliacao;
  }

  addAvaliacao() {
    const hoje = new Date();
    const newAvaliacao = this.getNewAv(hoje);

    this.avaliacoes.push(newAvaliacao);
    console.log(this.avaliacoes);
    this.saveFn.emit(null);
  }
  removeAvaliacao(avaliacao: any) {
    this.avaliacoes.splice(this.avaliacoes.indexOf(this.checkAvaliacao(avaliacao)), 1);
    this.saveFn.emit(null);
  }
  checkAvaliacao(avaliacao: Avaliacao): Avaliacao {
    const avaliacaoFound = this.avaliacoes.find((f: Avaliacao) => f.dataavaliacao === avaliacao.dataavaliacao);
    return avaliacaoFound;
  }

  confirmSave() {
    this.confirm.show({
      message: 'Salvar Alterações da Avaliação?',
      siFn: () => {
        this.saveFn.emit(null);
      },
    });
  }

  save() {
    this.saveFn.emit(null);
  }
  deleteAvaliacao(avaliacao, mesage) {
    this.confirm.show({
      message: mesage,
      siFn: () => {
        this.removeAvaliacao(avaliacao);
      },
    });
  }

  getNewAv(date: Date) {
    return new Avaliacao('', date, '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
  }

  permission(permissions?: string) {
    return this.tools.getPermission(permissions);
  }
}
