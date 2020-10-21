import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Treino } from 'src/app/shared/model/current';
import { ToolsService } from 'src/app/services/util';

@Component({
  selector: 'table-treino',
  templateUrl: './table-treino.component.html',
  styleUrls: ['./table-treino.component.scss']
})
export class TableTreinoComponent implements OnInit {

  @Input() dia = '';
  @Input() list: Treino[] = [];

  @Output() removeFn = new EventEmitter<{dia: string, treino: Treino} >();

  constructor(
    private tools: ToolsService,
  ) { }

  ngOnInit() {
  }

  remove(dia: string, treino: Treino) {
    this.removeFn.emit({dia, treino});
  }

  permission(permission?: string) {
    return this.tools.getPermission(permission);
  }
}
