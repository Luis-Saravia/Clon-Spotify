import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tab-label-icon',
  templateUrl: './tab-label-icon.component.html',
  styleUrls: ['./tab-label-icon.component.scss']
})
export class TabLabelIconComponent implements OnInit {

  @Input() url: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
