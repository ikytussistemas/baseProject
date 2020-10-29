import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  private statusConexao$ = new Subject<boolean>();

  constructor(
    private router: Router,
  ) {
    window.addEventListener('online', () => this.atualizaStatusConexao());
    window.addEventListener('offline', () => this.atualizaStatusConexao());
  }

  get isOnline(): boolean {
    return !!window.navigator.onLine;
  }

  get statusConexao(): Observable<boolean> {
    return this.statusConexao$.asObservable();
  }

  atualizaStatusConexao() {
    this.statusConexao$.next(this.isOnline);
  }

  sendMail() {
  }

  getFakeMail(): string {
    const base = '123456789abcdefghiklmnopqrstuvwxyz';
    const empresa = '@dfitness.com';
    let email = '';
    for (let i = 0; i < 6; i++) {
      const rnum = Math.floor(Math.random() * base.length);
      email += base.substring(rnum, rnum + 1);
    }
    return email + empresa;
  }

  goTo(url: string) {
    if (url.includes('http')) {
      window.open(url, '_blank');
    } else {
      this.router.navigate([url]);
    }
  }
}
