import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    ResetPasswordComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
  exports: [AuthComponent],
})
export class AuthModule {}
