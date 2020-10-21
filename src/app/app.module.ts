import { NgModule, LOCALE_ID, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

// --> para configurar o locale em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
// <--

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule} from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './config/routes/app-routing.module';
import { AuthInterceptor } from './config/auth.interceptor';
import { LayoutModule } from './layout/layout.module';
import { PackageModule } from './package/package.module';
import { ConfirmModule } from './package/confirm/confirm.module';
import { LoadingModule } from './package/loading/loading.module';
import { ToastModule } from './package/toast/toast.module';
import { SecurityModule } from './security/security.module';

import { environment } from '../environments/environment';
import { UpperDirective } from './components/directives/uppercase.directive';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

    LayoutModule,
    ReactiveFormsModule,
    PackageModule,
    ConfirmModule.forRoot(),
    LoadingModule.forRoot(),
    ToastModule.forRoot(),
    SecurityModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-Br'},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => UpperDirective), multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
