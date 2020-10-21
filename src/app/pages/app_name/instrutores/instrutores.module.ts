import { NgModule } from '@angular/core';

import { InstrutoresRoutingModule } from './instrutores-routing.module';
import { InstrutoresListComponent } from './instrutores-list/instrutores-list.component';
import { InstrutoresEditComponent } from './instrutores-edit/instrutores-edit.component';
import { ConfigModule } from 'src/app/config/config.module';
import { ModalUserComponent } from '../modais/modal-user/modal-user.component';
import { ModaisModule } from '../modais/modais.module';


@NgModule({
  declarations: [InstrutoresListComponent, InstrutoresEditComponent],
  imports: [
    ConfigModule,
    InstrutoresRoutingModule,
    ModaisModule,
  ]
})
export class InstrutoresModule { }
