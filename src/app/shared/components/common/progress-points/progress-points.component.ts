import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-progress-points',
  templateUrl: './progress-points.component.html',
  styleUrls: ['./progress-points.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressPointsComponent implements OnInit {

  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
