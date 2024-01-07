import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { themeInput } from './../theme.enum';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputMaskComponent implements OnInit {
  @Input() theme: string;
  @Input() type: string;
  @Input() mask: string;
  @Input() showMaskTyped: string;
  @Input() suffix: string;
  @Input() prefix: string;
  @Input() placeholder: string;

  themeClassName: string;

  constructor() { }

  ngOnInit(): void {

    this.themeClassName = this.theme ? themeInput[this.theme] : themeInput.default;

  }

}
