import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SlToastComponent } from "./toast.component";
import { SlIconModule } from "../icon/icon.module";

@NgModule({
  imports: [ BrowserModule,SlIconModule],
  declarations: [SlToastComponent],
  exports: [SlToastComponent]
})
export class SlToastModule { }
