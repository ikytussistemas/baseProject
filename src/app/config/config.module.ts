import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { LayoutModule } from '../layout/layout.module';
import { PackageModule } from '../package/package.module';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    LayoutModule,
    PackageModule,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    LayoutModule,
    PackageModule,
  ]
})
export class ConfigModule { }
