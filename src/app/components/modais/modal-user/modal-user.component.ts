import { Component, OnInit, Input } from '@angular/core';
import { User, Listas } from 'src/app/shared/model/current';
import { CheckboxItem } from 'src/app/package';
import { UserService } from 'src/app/services';
import { ResponseApi } from 'src/app/shared/model/util';
import { ToastService } from 'src/app/package/toast';
import { ErrorHandlerService } from 'src/app/services/util';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {

  @Input() user = new User('', '', '', '', ['ROLE_USER'], '', true);
  credentials = { email: '', password: '' };
  permissions: string[] = [];
  userPermissions = Listas.Permissions.map(x => new CheckboxItem(x.value, x.desc));

  constructor(
    public auth: AuthService,
    private handler: ErrorHandlerService,
    private toast: ToastService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.checkPermissions();
    }, 1000);
  }

  onRolesChange(value: any) {
    this.permissions = value;
  }

  checkPermissions() {
    if (this.user !== null) {
      this.credentials.email = this.user.email || '';
      this.credentials.password = this.user.senha || '';
      this.userPermissions = Listas.Permissions.map(x => {
        if (this.user.permissoes.includes(x.value)) {
          this.permissions.push(x.value);
          return new CheckboxItem(x.value, x.desc, true);
        } else {
          return new CheckboxItem(x.value, x.desc, false);
        }
      });

      this.onRolesChange(this.permissions);
    }
  }

  updateEmail(email: string) {
    this.user.email = email;
    this.user.permissoes = this.permissions;
    this.userService.createOrUpdate(this.user).subscribe((responseApi: ResponseApi) => {
      this.toast.success('Dados de acesso atualizados com sucesso!');
    }, error => {
      this.toast.danger(`Erro ao atualizar dados de acesso: ${this.handler.handler(error)}`);
    });
  }

  updatePassword(senha: string) {
    this.user.senha = senha;
    this.user.permissoes = this.permissions;
    this.userService.updatePassword(this.user).subscribe((responseApi: ResponseApi) => {
      this.toast.success('Senha atualizada com sucesso!');
    }, error => {
      this.toast.danger(`Erro ao atualizar senha: ${this.handler.handler(error)}`);
    });
  }
}
