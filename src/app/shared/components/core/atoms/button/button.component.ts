import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Color, ThemeBtn } from './../theme.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() theme: string;

  @Input() disabled: boolean;
  // @Output() onClick = new EventEmitter();

  backgroundColorClassName: string;
  themeClassName: string;

  constructor() { }

  ngOnInit(): void {

    this.backgroundColorClassName = Color[this.backgroundColor];
    this.themeClassName = this.theme ? ThemeBtn[this.theme] : ThemeBtn.default;

  }

  // setOnClick() {
  //   this.onClick.emit();
  // }

}

