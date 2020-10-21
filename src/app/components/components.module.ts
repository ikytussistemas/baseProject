import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MenuComponent } from './menu/menu.component';
import { LowerDirective } from './directives/lowercase.directive';
import { UpperDirective } from './directives/uppercase.directive';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { IkMaskDirective } from './directives/ik-mask.directive';
import { DiaSemana } from './pipes/diaSemana.pipe';
import { Mes } from './pipes/mes.pipe';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  entryComponents: [],
  declarations: [
    CheckboxGroupComponent,
    DiaSemana,
    IkMaskDirective,
    LoadingSpinnerComponent,
    LowerDirective,
    MenuComponent,
    Mes,
    ProgressBarComponent,
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
    ProgressBarComponent,
    UpperDirective,
  ],
})
export class ComponentsModule { }
