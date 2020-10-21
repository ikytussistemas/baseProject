import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ikPagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() count: number;
  @Input() page: number;
  @Input() totalPages: number;
  @Input() totalElements: number;

  @Output() pageData: EventEmitter<{ page: number, count: number }> = new EventEmitter<{ page: number, count: number }>();

  adjacente = 2;
  exibirProximo: boolean;
  lastItem: number;
  pages: Array<number>;


  constructor() { }

  ngOnInit() {
    this.page = this.page || 0;
    this.count = this.count || 10;
    this.geralinks();
  }

  setNextPage(event: any) {
    event.preventDefault();
    if (this.page + 1 < this.pages.length) {
      this.page = this.page + 1;
      this.paginar(this.page, this.count);
    }
  }

  setPreviousPage(event: any) {
    event.preventDefault();
    if (this.page > 0) {
      this.page = this.page - 1;
      this.paginar(this.page, this.count);
    }
  }

  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.paginar(this.page, this.count);
  }

  paginar(page: number, count: number) {
    this.pageData.emit({ page, count });
    this.geralinks();
  }

  geralinks() {
    this.pages = [];
    const iniAdjacente = ((this.page + 1) - this.adjacente <= 0) ? 1 :
      (this.page - this.adjacente <= 0) ? 1 : ((this.page + 1) - this.adjacente);
    const fimAdjacente = ((this.page + 1) + this.adjacente >= this.totalPages) ?
      this.totalPages : ((this.page + 1) + this.adjacente);

    for (let i = iniAdjacente; i <= fimAdjacente; i++) {
      this.pages.push(i);
    }
    this.lastItem = fimAdjacente;
  }
}
