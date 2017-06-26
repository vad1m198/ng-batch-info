import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfoListModule } from "./infoList/infoList.module";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,InfoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
