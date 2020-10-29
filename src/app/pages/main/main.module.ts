import { NgModule } from '@angular/core';

import { ConfigModule } from 'src/app/config/config.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    ConfigModule,
    MainRoutingModule
  ]
})
export class MainModule { }
