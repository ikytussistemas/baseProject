import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/services/util';
import { Ficha, Person, User } from 'src/app/shared/model/current';
import { Avaliacao } from 'src/app/shared/model/current/moldes/avaliacao';
import { PersonService, UserService } from 'src/app/services';
import { AuthService } from 'src/app/security/auth.service';
import { ResponseApi } from 'src/app/shared/model/util';

@Component({
  selector: 'app-home-aluno',
  templateUrl: './home-aluno.component.html',
  styleUrls: ['./home-aluno.component.scss']
})
export class HomeAlunoComponent implements OnInit {

  aluno: Person;
  bday: any;
  avaliacoes: Avaliacao[] = [];
  fichas: Ficha[] = [];
  user: User;

  constructor(
    private alunoService: PersonService,
    private auth: AuthService,
    private tools: ToolsService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUser();
    this.findUser();
  }

  getUser() {
    this.alunoService.findById(this.auth.jwtPayload.user_id).subscribe((responseApi: ResponseApi) => {
      this.aluno = responseApi.data;
      this.bday = new Date(this.aluno.datanascimento).toISOString().substr(0, 10);
      this.fichas = this.aluno.fichas;
      this.avaliacoes = this.aluno.avaliacoes;
    }, error => {
        console.log('aluno não encontrado');
    });
  }

  findUser() {
    this.userService.findById(this.auth.jwtPayload.user_id).subscribe((responseApi: ResponseApi) => {
      this.user = responseApi.data;
    }, error => {
        this.user = null;
    });
  }

  flip() {
    document.getElementById('card').classList.toggle('is-flipped');
  }

  permission(permissions?: string) {
    return this.tools.getPermission(permissions);
  }
}
