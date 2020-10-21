import { Component, OnInit, Input } from '@angular/core';

import { Ficha, Treino } from 'src/app/shared/model/current';

@Component({
  selector: 'modal-records',
  templateUrl: './modal-records.component.html',
  styleUrls: ['./modal-records.component.scss']
})
export class ModalRecordsComponent implements OnInit {

  @Input() records: Ficha[] = [];
  @Input() saveFn: () => void;

  ficha = new Ficha(null, [], [], null, [], [], null, [], []);

  constructor() { }

  ngOnInit() {
  }

  setFicha(ficha: any) {
    this.ficha = ficha;
  }

}
