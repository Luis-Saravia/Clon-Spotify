import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabLabelIconModule } from './tab-label-icon/tab-label-icon.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabLabelIconModule,
  ],
  exports: [
    TabLabelIconModule,
  ]
})
export class CommonAppModule { }
