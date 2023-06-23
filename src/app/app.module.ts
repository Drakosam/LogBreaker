import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { LogViewComponent } from './views/log-view/log-view.component';
import { LogManagerComponent } from './views/log-manager/log-manager.component';
import { LogLineComponent } from './components/log-line/log-line.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LogViewComponent,
    LogManagerComponent,
    LogLineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
