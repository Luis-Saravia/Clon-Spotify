import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { themeImg } from './../theme.enum';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit {
  @Input() url: string = '';
  @Input() theme: string = '';

  themeClassName: string = '';

  constructor() { }

  ngOnInit(): void {

    this.themeClassName = this.theme ? themeImg[this.theme] + ' ' + themeImg.default : themeImg.default;

  }

}
