import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LogItem} from "./data-clasess/log-item";
import {LogServiceService} from "./services/log-service.service";
import {AppService} from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  sub: Subscription = new Subscription();
  subName: Subscription = new Subscription();
  logsItems: LogItem[] = [];
  showLogName: string = '';

  constructor(private logService: LogServiceService, private appService: AppService) {
  }

  ngOnInit() {
    this.sub = this.logService.logsStore.subscribe((logs) => {
      this.logsItems = logs;
    });
    this.subName = this.appService.showLogNameObservable.subscribe((logName) => {
      this.showLogName = logName;
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.subName) {
      this.subName.unsubscribe();
    }
  }
}
