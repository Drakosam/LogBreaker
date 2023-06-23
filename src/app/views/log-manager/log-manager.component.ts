import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LogServiceService} from "../../services/log-service.service";
import {Subscription} from "rxjs";
import {LogItem} from "../../data-clasess/log-item";

@Component({
  selector: 'app-log-manager',
  templateUrl: './log-manager.component.html',
  styleUrls: ['./log-manager.component.scss']
})
export class LogManagerComponent implements OnInit, OnDestroy {

  sub: Subscription = new Subscription();
  logsItems: LogItem[] = [];
  public currentLogItem: LogItem | undefined;
  @Input() public showLogName: string = '';

  constructor(private logService: LogServiceService) {
  }

  ngOnInit() {
    this.sub = this.logService.logsStore.subscribe((logs) => {
      this.logsItems = logs;
      this.currentLogItem = logs.find((log) => {
        return log.name === this.showLogName;
      });

    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
