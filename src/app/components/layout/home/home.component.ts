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
    if (this.auth.jwtPayload.authorities.includes('ROLE_ADM_DFIT')) {
      this.menusGroup.push(...this.menuADMDFIT());
    }
  }

  menuADMDFIT() {
    return [
      new MenuGroup('Sistema', 'fas fa-sitemap', 'primary', [
        new OpcaoMenu('Perfil', 'fas fa-id-card', 'dark', '/academus/faculdades', false),
        new OpcaoMenu('Configurações', 'fas fa-cogs', 'success', '/academus/faculdades', false),
        new OpcaoMenu('Example', 'fas fa-cogs', 'warning', '/main/example', true),
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

  connect() {
    setInterval(() => {
      this.service.findById('11').pipe().subscribe(() => {
        console.log('...');
        console.clear();
      }, erro => { console.log('...'); console.clear(); });
    }, 60000 * 18);
  }
}

