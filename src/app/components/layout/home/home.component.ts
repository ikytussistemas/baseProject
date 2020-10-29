import { Component, OnInit } from '@angular/core';
import { LoadingService, OpcaoMenu } from 'src/app/package';
import { MenuGroup } from 'src/app/package/menu/menu.component';
import { AuthService } from 'src/app/security/auth.service';
import { EmpresasService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public loading: LoadingService,
    private service: EmpresasService,
  ) {
  }

  menus: OpcaoMenu[];
  menusGroup: MenuGroup[] = [];

  ngOnInit() {
    this.changeMenu();
    this.connect();
  }

  changeMenu() {

    if (this.auth.jwtPayload.authorities.includes('ROLE_ALUNO_DFIT')) {
      this.menusGroup.push(...this.menuALUNODFIT());
    }
    if (this.auth.jwtPayload.authorities.includes('ROLE_DIR')) {
      this.menusGroup.push(...this.menuADMDFIT());
    }
    if (this.auth.jwtPayload.authorities.includes('ROLE_ADM_DFIT')) {
      this.menusGroup.push(...this.menuADMDFIT());
    }
    if (this.auth.jwtPayload.authorities.includes('ROLE_PROF_DFIT')) {
      this.menusGroup.push(...this.menuPROFDFIT());
    }
    if (this.auth.jwtPayload.authorities.includes('ROLE_DASH_DFIT')) {
      this.menusGroup.push(...this.menuDash());
    }
  }

  menuALUNODFIT() {
    return [
      new MenuGroup('Configurações', 'fas fa-cogs', 'success', [
        new OpcaoMenu('Perfil', 'far fa-address-card', 'dark', '/academus/faculdades', false),
      ]),
      new MenuGroup('outros', 'fas fa-server', 'danger', [
        new OpcaoMenu('Alunos', 'fas fa-user-graduate', 'primary', '/academus/alunos', false),
      ]),
    ];
  }

  menuADMDFIT() {
    return [
      new MenuGroup('Sistema', 'fas fa-sitemap', 'primary', [
        new OpcaoMenu('Perfil', 'fas fa-id-card', 'dark', '/academus/faculdades', false),
        new OpcaoMenu('Configurações', 'fas fa-cogs', 'success', '/academus/faculdades', false),
        new OpcaoMenu('DashBoard', 'fas fa-cogs', 'warning', '/dfit/dash', true),
      ]),
      new MenuGroup('Cadastros', 'fas fa-server', 'danger', [
        new OpcaoMenu('Alunos', 'fas fa-id-badge', 'primary', '/dfit/alunos', true),
        new OpcaoMenu('Exercicios', 'fas fa-dumbbell', 'info', '/dfit/exercicios', true),
        new OpcaoMenu('Instrutores', 'fas fa-chalkboard-teacher', 'warning', '/dfit/instrutores', true),
      ]),
      new MenuGroup('Ferramentas', 'fas fa-toolbox', 'tools', [
        new OpcaoMenu('Sites úteis', 'fas fa-link', 'primary', 'http://lattes.cnpq.br/', false),
        new OpcaoMenu('Cálculadora IMC', 'fas fa-clock', 'info', '/academus/funcionarios', false),
      ])
    ];
  }

  menuPROFDFIT() {
    return [
      new MenuGroup('Configurações', 'fas fa-cogs', 'success', [
        new OpcaoMenu('Perfil', 'far fa-address-card', 'dark', '/academus/faculdades', false),
      ]),
      new MenuGroup('alunos', 'fas fa-server', 'danger', [
        new OpcaoMenu('DashBoard', 'fas fa-cogs', 'warning', '/dfit/dash', true),
      ]),
    ];
  }

  menuDash() {
    return [
      new MenuGroup('DashBoard', 'fas fa-cogs', 'success', [
        new OpcaoMenu('DashBoard', 'fas fa-cogs', 'warning', '/dfit/dash', true),
      ]),
    ];
  }

  connect() {
    setInterval(() => {
      this.service.findById('11').pipe().subscribe(() => {
        console.log('...');
        console.clear();
      }, erro => { console.log('...'); console.clear(); });
    }, 60000 * 18);
  }
}

