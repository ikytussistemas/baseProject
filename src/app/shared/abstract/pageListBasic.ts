import { Injector, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';

import { ConfirmService } from 'src/app/package/confirm';
import { BaseService, ErrorHandlerService } from 'src/app/services/util';
import { AuthService } from 'src/app/security/auth.service';
import { LoadingService } from 'src/app/package/loading';
import { ToastService } from 'src/app/package/toast';
import { Filters, ResponseApi } from 'src/app/shared/model/util';

export abstract class PageListBasic<T extends { id: string }, S extends BaseService<{ id: string }>> implements OnInit {
  id: string;
  filter = new Filters();
  list: T[];

  public auth: AuthService;
  protected confirm: ConfirmService;
  protected erroService: ErrorHandlerService;
  protected load: LoadingService;
  protected relatorioService: S;
  protected toast: ToastService;


  page = 0;
  count = 5;
  counts = [2, 5, 10, 20, 50, 100];
  totalPages: number;
  totalElements: number;
  search = '';

  constructor(protected injector: Injector, protected service: S) {
    this.auth = this.injector.get(AuthService);
    this.confirm = this.injector.get(ConfirmService);
    this.erroService = this.injector.get(ErrorHandlerService);
    this.load = this.injector.get(LoadingService);
    this.toast = this.injector.get(ToastService);
  }

  ngOnInit() {
    this.getList();
    this.listFactory();
  }

  getList() {
    this.service
      .findAllPage(this.page, this.count, this.filter)
      .pipe(take(1))
      .subscribe(
        (responseApi: ResponseApi) => {
          this.list = responseApi.data.content;
          this.transformObjects().then((response) => {
            this.list = response;
          });
          this.totalPages = new Array(responseApi.data.totalPages).length;
          this.totalElements = responseApi.data.totalElements;
        },
        (error) => {
          this.toast.danger(`Falha ao listar!! (${this.handleError(error)})`);
        }
      );
  }

  openModalDelete(id: string, message: string) {
    this.id = id;
    this.confirm.show({
      message: `Deseja deletar ${message}`,
      siFn: () => {
        this.deletar();
      },
    });
  }

  deletar() {
    this.load.show({});
    this.service.delete(this.id).subscribe(
      (responseApi: ResponseApi) => {
        this.toast.success(`Exclusão realizada com sucesso!`);
        this.getList();
        this.load.dismiss();
      },
      (error) => {
        this.toast.danger(`Falha ao deletar!! (${this.handleError(error)})`);
        this.load.dismiss();
      }
    );
  }

  listFactory() { }

  pagination(event) {
    this.page = event.page;
    this.count = event.count;
    this.getList();
  }

  async transformObjects() {
    return this.list;
  }

  relatorio(rel?: any) {
    this.relatorioService[rel]().then((relatorio) => {
      const url = window.URL.createObjectURL(relatorio);
      window.open(url);
    });
  }

  filtrar(event: any) {
    if (event.length > 2 || event.length < 1) {
      setTimeout(() => {
        this.getList();
        this.pagination({ page: 0, count: this.count });
      }, 100);
    }
  }

  handleError(erro: any) {
    return this.erroService.handler(erro);
  }
}
