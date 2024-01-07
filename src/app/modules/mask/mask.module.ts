import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskComponent } from './mask.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [MaskComponent, CounterComponent],
  imports: [CommonModule],
  exports: [MaskComponent],
})
export class MaskModule {}
