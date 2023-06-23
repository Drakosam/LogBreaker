import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-log-line',
  templateUrl: './log-line.component.html',
  styleUrls: ['./log-line.component.scss']
})
export class LogLineComponent implements OnInit, OnDestroy {
  @Input() show_log_line: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {}


}
