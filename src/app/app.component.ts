import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Spotify';

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    number: ['', [Validators.minLength(8), Validators.required]]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  sendFirstForm(){
    console.log('firstFormGroup: ', this.firstFormGroup.value);
  }

  sendSecondForm(){
    console.log('secondFormGroup: ', this.secondFormGroup.value);
  }

  send(){
    console.log('firstFormGroup: ', this.firstFormGroup.value);
    console.log('secondFormGroup: ', this.secondFormGroup.value);
  }
}
