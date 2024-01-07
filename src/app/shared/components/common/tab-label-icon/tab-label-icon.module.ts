import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabLabelIconComponent } from './tab-label-icon.component';
import { ImageModule } from '../../core/atoms/image/image.module';



@NgModule({
  declarations: [TabLabelIconComponent],
  imports: [
    CommonModule,
    ImageModule,
  ],
  exports: [
    TabLabelIconComponent
  ],
})
export class TabLabelIconModule { }
