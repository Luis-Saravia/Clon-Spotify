import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Color, ThemeBtn } from './../theme.enum';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent implements OnInit {

  @Input() backgroundColor: string;
  @Input() theme: string;

  backgroundColorClassName: string;
  themeClassName: string;

  constructor() { }

  ngOnInit(): void {
    this.backgroundColorClassName = Color[this.backgroundColor];
    this.themeClassName = this.theme ? ThemeBtn[this.theme] : ThemeBtn.default;

  }

}
