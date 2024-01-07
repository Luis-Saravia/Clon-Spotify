import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { themeIcon } from './../theme.enum';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {

  themeClassName: string = '';

  constructor() { }

  ngOnInit(): void {
    this.themeClassName = themeIcon.default;
  }

}
