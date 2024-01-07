import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkComponent } from './link.component';

import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    LinkComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    LinkComponent
  ],
})
export class LinkModule { }
