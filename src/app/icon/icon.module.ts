import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SlIconComponent } from "./icon.component";
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  imports: [ BrowserModule,InlineSVGModule],
  declarations: [SlIconComponent],
  exports: [SlIconComponent]
})
export class SlIconModule { }
