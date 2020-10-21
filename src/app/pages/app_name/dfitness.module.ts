import { NgModule } from '@angular/core';

import { DfitnessRoutingModule } from './dfitness-routing.module';
import { ConfigModule } from 'src/app/config/config.module';
import { DfitnessComponent } from './dfitness.component';

@NgModule({
  declarations: [DfitnessComponent],
  imports: [
    ConfigModule,
    DfitnessRoutingModule
  ]
})
export class DfitnessModule { }
