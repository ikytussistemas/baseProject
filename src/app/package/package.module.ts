import { ComponentsModule } from './../components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PaginationComponent } from './pagination/pagination.component';
import { ValidMsgComponent } from './valid-msg/valid-msg.component';

@NgModule({
  declarations: [PaginationComponent, ValidMsgComponent],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    PaginationComponent,
    ValidMsgComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ]
})
export class PackageModule { }
