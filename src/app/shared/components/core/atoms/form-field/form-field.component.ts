import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent implements OnInit {

  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() label: MatFormFieldAppearance = 'outline';


  constructor() { }

  ngOnInit(): void {
  }

}
