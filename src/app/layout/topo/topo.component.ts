import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/security/auth.service';
import { Person } from 'src/app/shared/model/current';
import { ResponseApi } from 'src/app/shared/model/util';
import { EmpresaDTO } from 'src/app/shared/model/current/DTO/empresa-dto';
import { LoadingService } from 'src/app/package/loading';
import { EmpresasService, PersonService } from 'src/app/services';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: []
})
export class TopoComponent implements OnInit {
  showMenu = false;
  user: Person;
  empresa: EmpresaDTO;

  constructor(
    public auth: AuthService,
    private personService: PersonService,
    private empresaService: EmpresasService,
    private load: LoadingService
  ) { }

  ngOnInit() {
    this.load.show({ message: 'Conectando ao servidor' });
    this.personService.findById(this.auth.jwtPayload.user_id).subscribe(
      (responseApi: ResponseApi) => {
        this.user = responseApi.data;
        localStorage.setItem('user_img', this.user.urlImg);
        this.load.dismiss();
      },
      erro => {
        this.load.dismiss();
      }
    );
    this.empresaService
      .findById(this.auth.jwtPayload.empresa)
      .subscribe((responseApi: ResponseApi) => {
        this.empresa = responseApi.data;
        localStorage.setItem('empresa_img', this.empresa.urlLogo);
      });
    // this.controlColors();
    this.handleMenu();
  }

  public logout() {
    this.auth.logout();
  }

  controlNav() {
    if (this.showMenu === false) {
      document.getElementById('mySidenav').style.width = '250px';
      this.showMenu = true;
      setTimeout(() => {
        document.getElementById('mySidenav').style.width = '0';
        this.showMenu = false;
      }, 30000);
    } else {
      document.getElementById('mySidenav').style.width = '0';
      this.showMenu = false;
    }
  }

  handleMenu() {
    window.addEventListener('load', () => {
      document.getElementById('mySidenav').addEventListener('mouseleave', () => {
        this.controlNav();
      });
    });
  }
}
