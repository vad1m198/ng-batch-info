import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Config } from './util/Config';
import { TabsModule } from "./tabs/tabs.module";
import { SlIconModule } from "./icon/icon.module";
import { InfoListModule } from "./info-list/info-list.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,TabsModule,SlIconModule,InfoListModule
  ],
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
