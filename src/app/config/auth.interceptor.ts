import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from '../security/auth.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  UrlApi = environment.UrlApi;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const N = this.UrlApi.length;
    const requestToAPI = req.url.substring(0, N) === this.UrlApi;

    if (requestToAPI) {

      if (req.url.includes('//viacep.com.br/ws/')) { // api de serviço de CEP

        return next.handle(req);
      }

      if (req.url.includes('oauth/token')) { // requisição de token
        const authReq = req.clone({
          headers: req.headers
            .set('Authorization', 'Basic YW5ndWxhcjpAWDFzQW5nMjBJOQ==')
            .set('Content-Type', 'application/x-www-form-urlencoded')
        });
        return next.handle(authReq);

      } else { // demais requisições

        const token = this.workRequired(localStorage.getItem('token'));
        const authReq = req.clone({ headers: req.headers.set('Authorization', `bearer ${token}`) });

        return next.handle(authReq);
      }
    } else {
      return next.handle(req);
    }
  }

  workRequired(token: any) {
    if (this.auth.isAccesTokenInvalid()) {
      this.router.navigate(['/login']);
      return token;
    } else {
      return token;
    }
  }
}
