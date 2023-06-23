import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LogServiceService} from "../../services/log-service.service";
import {Subscription} from "rxjs";
import {LogItem} from "../../data-clasess/log-item";

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
