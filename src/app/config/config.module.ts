import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { LayoutModule } from '../layout/layout.module';
import { PackageModule } from '../package/package.module';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    LayoutModule,
    PackageModule,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    LayoutModule,
    PackageModule,
    ReactiveFormsModule,
  ]
})
export class ConfigModule { }
