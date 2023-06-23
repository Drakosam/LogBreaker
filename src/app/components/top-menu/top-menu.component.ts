import {Component, OnDestroy, OnInit} from '@angular/core';
import {LogServiceService} from "../../services/log-service.service";
import {Subscription} from "rxjs";
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit, OnDestroy {

  private subLogFiles: Subscription | undefined;
  public logFilesNames: string[] = [];



  constructor(private logService: LogServiceService, private appService: AppService) {
  }

  ngOnInit(): void {
    this.subLogFiles = this.logService.logsStore.subscribe((files) => {
      this.logFilesNames = files.map(f => f.name);
    });
  }

  ngOnDestroy(): void {
    if (this.subLogFiles) {
      this.subLogFiles.unsubscribe();
    }
  }

  loadText() {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (f: any) => {
      this.logService.pickLogFile(f)
    };
    input.click();
  }
  switchFile(name: string) {

    this.appService.setShowLogName(name);
  }
}
