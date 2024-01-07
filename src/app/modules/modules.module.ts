import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { MaskModule } from './mask/mask.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule, MaskModule],
  exports: [AuthModule, MaskModule],
})
export class ModulesModule {}
