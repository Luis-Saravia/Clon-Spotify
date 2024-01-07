import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(){
    this.form = this.createForm()
  }

  createForm(){
    return this.formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.email, Validators.minLength(11)])],
      lastname: ['', Validators.compose([Validators.minLength(2)])],
      number: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(5)])],
      country: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([])],
      address: ['', Validators.compose([])],
      identify: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(15)])],
    })
  };

  // al obtener todo el formulario completo entonces se le enviará al backend el todo el formulario para que pueda agregarse el usuario
  send(){
    console.log(this.form.value);
    this.form.reset()
  }
}
