import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ConfigModule } from '../config/config.module';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    ConfigModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SecurityModule { }
