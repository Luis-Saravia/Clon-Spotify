import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { themeInput } from './../theme.enum';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {
  @Input() theme: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() isReadonly: boolean = false;


  themeClassName: string;

  constructor() { }

  ngOnInit(): void {

    this.themeClassName = this.theme ? themeInput[this.theme] : themeInput.default;

  }

}
