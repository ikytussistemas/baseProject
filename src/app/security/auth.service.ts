import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';
import { take } from 'rxjs/operators';

import { CredenciaisDTO } from '../shared/model/util/credenciais-dto';
import { environment } from '../../environments/environment';
import { ToastService } from '../package/toast/toast.service';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'oauth/token';
  TokenRevokeUrl = 'tokens/revoke';
  UrlApi = environment.UrlApi;
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: ToastService,
  ) {
    this.getToken();
  }

  login(creds: CredenciaisDTO) {
    const body = `username=${creds.username}&password=${creds.password}&grant_type=password`;
    return this.http.post(`${this.UrlApi}/${this.oauthTokenUrl}`, body, {
      observe: 'response',
      responseType: 'text',
      withCredentials: true
    });
  }

  getNewAccessToken() {
    const body = `grant_type=refresh_token`;
    return this.http.post(`${this.UrlApi}/${this.oauthTokenUrl}`, body, {
      observe: 'response',
      responseType: 'text',
      withCredentials: true
    })
      .pipe(take(1)).subscribe(response => {
        this.storageToken(JSON.parse(response.body).access_token);
        this.toast.success('Access Token criado');
      },
        error => {
          this.toast.danger(this.errorResponse(error));
          this.logout();
        });
  }

  logout() {
    this.http.delete(`${this.UrlApi}/${this.TokenRevokeUrl}`, { withCredentials: false })
      .pipe(take(1)).subscribe(() => {
        localStorage.removeItem('token');
        this.jwtPayload = null;
        this.router.navigate(['/login']);
      });
  }

  isAccesTokenInvalid() {
    const token = localStorage.getItem('token');

    return !token || jwtHelper.isTokenExpired(token);
  }

  storageToken(token) {
    this.jwtPayload = jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private getToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.storageToken(token);
    }
  }

  getPermission(permission: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permission);
  }

  getAnyPermission(roles: []) {
    for (const role of roles) {
      if (this.getPermission(role)) {
        return true;
      }
    }
    return false;
  }

  errorResponse(error: HttpErrorResponse) {

    if (error.status === 400) {
      const descript: string = error.error;
      if (descript.includes('invalid_grant')) {
        return 'Usuário ou senha inválida!!';
      }
    }

    return `Error: ${error.error} - Status: ${error.status}`;
  }

}
