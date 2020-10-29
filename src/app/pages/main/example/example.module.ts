import { NgModule } from '@angular/core';

import { ConfigModule } from 'src/app/config/config.module';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleEditComponent } from './example-edit/example-edit.component';
import { ExampleListComponent } from './example-list/example-list.component';


@NgModule({
  declarations: [ExampleEditComponent, ExampleListComponent],
  imports: [
    ConfigModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
