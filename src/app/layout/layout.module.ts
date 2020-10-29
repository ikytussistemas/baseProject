import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { FormsModule } from '@angular/forms';
import { ModaisModule } from '../pages/app_name/modais/modais.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule,
    ModaisModule,
  ],
  providers: [],

  declarations: [TopoComponent, RodapeComponent, HomeComponent, BaseLayoutComponent],
  exports: [TopoComponent, RodapeComponent, HomeComponent, BaseLayoutComponent]
})
export class LayoutModule { }
