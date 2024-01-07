import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  formRecoveryPassword: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.formRecoveryPassword = this.createForm()
  }

  createForm() {
    return this.formBuilder.group({
      email: [
        '',
        [Validators.email, Validators.required]
      ]
    })
  }

  // recuerda que el flujo de esta página es que envie el formulario al backend en el cual este tiene que enviarte un mensaje a tu correo electronico
  send(){
    console.log(this.formRecoveryPassword.value)
  }
}
