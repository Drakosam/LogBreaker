import { Injectable } from '@angular/core';
import {LogItem} from "../data-clasess/log-item";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  logs: LogItem[] = [];

  _logsStore = new BehaviorSubject<LogItem[]>(this.logs);
  logsStore = this._logsStore.asObservable();

  constructor() { }

  pickLogFile(rawFile:any){
    const ff = new FileReader();
    ff.readAsText(rawFile.target.files[0]);
    ff.onload = (e: any) => {
      const rawText = ff.result as string;
      this.logs.push(new LogItem(rawText.split(/\r?\n/), rawFile.target.files[0].name));
      this._logsStore.next(this.logs);
    }
  }
}
