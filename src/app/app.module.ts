import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfoListModule } from "./infoList/infoList.module";
import { AppComponent } from './app.component';
import { Config } from './util/Config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,InfoListModule
  ],
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
