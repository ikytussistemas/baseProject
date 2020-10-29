import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { take } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { CredenciaisDTO } from 'src/app/shared/model/util';
import { LoadingService, ToastService } from 'src/app/package';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;

  creds: CredenciaisDTO = {
    username: '',
    password: ''
  };

  formulario: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });

  constructor(
    public auth: AuthService,
    private load: LoadingService,
    private router: Router,
    private toast: ToastService,
  ) { }

  ngOnInit() { }

  login() {
    this.load.show({ message: 'Aguarde, se conectando ao servidor....' });
    this.message = '';
    this.creds.username = this.formulario.value.username;
    this.creds.password = this.formulario.value.password;

    this.auth.login(this.creds).pipe(take(1)).subscribe((response) => {
      this.auth.storageToken(JSON.parse(response.body).access_token);
      this.router.navigate(['/']);
      this.load.dismiss();
    },
      error => {
        this.load.dismiss();
        this.toast.danger(this.auth.errorResponse(error));
      });
  }
}
