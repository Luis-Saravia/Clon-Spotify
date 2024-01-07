import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputMaskComponent } from './input-mask.component';

import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [InputMaskComponent],
  imports: [
    CommonModule,
    MatInputModule
  ],
  providers: [],
  exports: [
    InputMaskComponent
  ],
})
export class InputMaskModule { }
