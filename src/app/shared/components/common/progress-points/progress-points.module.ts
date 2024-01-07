import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressPointsComponent } from './progress-points.component';



@NgModule({
  declarations: [ProgressPointsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressPointsComponent
  ],
})
export class ProgressPointsModule { }
