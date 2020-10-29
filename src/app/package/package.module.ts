import { ComponentsModule } from './../components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { DiaSemana } from './pipes/diaSemana.pipe';
import { IkMaskDirective } from './directives/ik-mask.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LowerDirective } from './directives/lowercase.directive';
import { MenuComponent } from './menu/menu.component';
import { Mes } from './pipes/mes.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ValidMsgComponent } from './valid-msg/valid-msg.component';
import { UpperDirective } from './directives/uppercase.directive';

@NgModule({
  declarations: [
    CheckboxGroupComponent,
    DiaSemana,
    IkMaskDirective,
    LoadingSpinnerComponent,
    LowerDirective,
    MenuComponent,
    Mes,
    PaginationComponent,
    ProgressBarComponent,
    ValidMsgComponent,
    UpperDirective,
  ],
  exports: [
    CheckboxGroupComponent,
    DiaSemana,
    IkMaskDirective,
    LoadingSpinnerComponent,
    LowerDirective,
    MenuComponent,
    Mes,
    PaginationComponent,
    ProgressBarComponent,
    ValidMsgComponent,
    UpperDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class PackageModule { }
