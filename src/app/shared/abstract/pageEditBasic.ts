import { ActivatedRoute, Params, Router } from '@angular/router';
import { OnInit, Injector, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { take, map, switchMap } from 'rxjs/operators';
import { empty } from 'rxjs';

import { EstadoBr, Cidade, Endereco, Filters, ResponseApi } from '../model/util';
import { ConsultaCepService, BaseService, ImageService, ErrorHandlerService } from 'src/app/services/util';
import { AuthService } from 'src/app/security/auth.service';
import { LoadingService } from 'src/app/package/loading';
import { ToastService } from 'src/app/package/toast';
import { ConfirmService } from '../../package/confirm/confirm.service';
import { User } from '../model/current';

export abstract class PageEditBasic<T extends {id: string}, S extends BaseService<{ id: string }>> implements OnInit {

  object: T;
  filter = new Filters();
  id: string;
  formulario: FormGroup;
  estados: EstadoBr[];
  cidades: Cidade[];

  validateMsg = 'Erro de Validação';
  uploadProgress = 0;
  filePhoto: File;

  usuario: User;

  auth: AuthService;
  protected cd: ChangeDetectorRef;
  protected cepService: ConsultaCepService;
  protected confirm: ConfirmService;
  protected erroService: ErrorHandlerService;
  protected formBuilder: FormBuilder;
  protected imageService: ImageService;
  protected load: LoadingService;
  protected route: ActivatedRoute;
  protected router: Router;
  protected toast: ToastService;

  constructor(
    protected injector: Injector,
    protected service: S,
    protected urlImg: string,
    protected urlList: string
    ) {
    this.auth = this.injector.get(AuthService);
    this.cd = this.injector.get(ChangeDetectorRef);
    this.cepService = this.injector.get(ConsultaCepService);
    this.confirm = this.injector.get(ConfirmService);
    this.erroService = this.injector.get(ErrorHandlerService);
    this.formBuilder = this.injector.get(FormBuilder);
    this.imageService = this.injector.get(ImageService);
    this.load = this.injector.get(LoadingService);
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.toast = this.injector.get(ToastService);
  }

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe((parametros: Params) => {
      if (parametros.id === '0') {
        this.newRecord();
      } else {
        this.id = parametros.id;
        this.findById(this.id);
      }
    });
    this.listFactory();
  }

  findById(id: string) {
    this.service.findById(id).pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.object = responseApi.data;
      this.guardListAttrib();

      if (this.object.hasOwnProperty('endereco')) {
        // tslint:disable-next-line: no-string-literal
        this.cepService.getCidadeNome(this.object['endereco']['cidade']).subscribe(dados => this.cidades = dados);
      }

      this.formConstructorById().then((form) => {
        this.formulario = form;
        this.chageCitys();
      });

    }, err => {
      this.toast.danger(`Falha ao localizar documento!!: (${this.handleError(err)})`);
    });
   }

  newRecord() {
    this.formConstructorNew().then((form) => {
      this.formulario = form;
      this.chageCitys();
    });
  }

  onSubmit() {
    this.object = this.formulario.value;

    this.returnListAttrib();
    this.load.show({ message: 'Aguarde validação...' });
    this.validateData().then((result) => {
      this.load.dismiss();
      if (result) {
        if (!this.object.id) {
          this.service.createOrUpdate(this.object).subscribe((responseApi: ResponseApi) => {
            this.toast.success('Registro efetuado com sucesso!');
            this.resetForm();
          }, erro => {
            console.log(erro);
            this.toast.danger(`Erro ao registrar ${this.handleError(erro)}`);
          });
        } else {
          if (this.filePhoto) {
            this.load.show({ message: 'Aguarde upload...' });
            const uploadTask = this.imageService.uploadImg(this.urlImg, this.filePhoto, this.object.id);

            uploadTask.percentageChanges().subscribe((percentagem: number) => {
              this.uploadProgress = Math.round(percentagem);
              this.cd.detectChanges();
            });

            uploadTask.then((UploadTaskSnapshot: firebase.storage.UploadTaskSnapshot) => {
              UploadTaskSnapshot.ref.getDownloadURL().then((downloadURL) => {
                // tslint:disable-next-line: no-string-literal
                this.object['urlImg'] = downloadURL;
                this.edit(this.object);
              });
            });
          } else {
            this.load.show({});
            this.edit(this.object);
          }
        }
      } else {
        this.toast.danger(this.validateMsg);
      }
    });
  }

  edit(object: T) {
    this.service.createOrUpdate(object).pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.load.dismiss();
      this.toast.success('Edição realizada com sucesso!');
      this.filePhoto = undefined;
      this.uploadProgress = 0;
      this.cd.detectChanges();
    }, erro => {
      this.toast.danger(`Erro ao editar: (${this.handleError(erro)})`);
    });
  }

  onPhoto(event) {
    const loading = this.load;
    loading.show({});
    this.imageService.processImage(event.target.files).pipe(take(1)).subscribe((res) => {
      this.filePhoto = res.data;
    }, err => { }, () => { loading.dismiss(); });
  }

  async guardListAttrib() {
  }

  async returnListAttrib() {
  }

  async validateData() {
    return true;
  }

  async formConstructorById() {
   return this.formBuilder.group({
    });
  }

  async formConstructorNew() {
    return this.formBuilder.group({
    });
  }

  resetForm() {
    this.formulario.reset();
  }

  chageCitys() {
    if (this.object !== undefined && this.object.hasOwnProperty('endereco')) {
      this.formulario.get('endereco.estado').valueChanges
      .pipe(
        map(estado => this.estados.filter(e => e.sigla === estado)),
        // tslint:disable-next-line: deprecation
        map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
        switchMap((estadoId: number) => this.cepService.getCidades(estadoId)),
      )
      .subscribe(cidades => this.cidades = cidades);
    }
  }

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep).pipe(take(1)).subscribe((endereco: Endereco) => {
        this.populaDadosForm(endereco);
      }, erro => console.log(this.handleError(erro)));
    }
  }

  populaDadosForm(endereco) {
    this.formulario.patchValue({
      endereco: {
        cep: endereco.cep,
        logradouro: endereco.logradouro,
        complemento: endereco.complemento,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
        estado: endereco.uf
      }
    });
  }

  getCidades() {
    this.cepService.getCidades(6).subscribe(cidades => {
      this.cidades = cidades;
    });
  }

  listFactory() {}

  handleError(erro: any) {
    return this.erroService.handler(erro);
  }

  return() {
    this.router.navigate([this.urlList]);
  }
}
