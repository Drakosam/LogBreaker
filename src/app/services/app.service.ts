import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _showLogNameObservable = new BehaviorSubject<string>('');
  public showLogNameObservable = this._showLogNameObservable.asObservable();

  constructor() {
  }

  setShowLogName(logName: string) {
    this._showLogNameObservable.next(logName);
  }
}
