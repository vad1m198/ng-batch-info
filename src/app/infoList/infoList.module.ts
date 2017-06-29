import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TabsModule } from "../tabs/tabs.module";
import { InfoListComponent } from "./infoList.component";
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  imports: [ModelModule, BrowserModule,TabsModule,InlineSVGModule],
  declarations: [InfoListComponent],
  exports: [InfoListComponent]
})
export class InfoListModule { }
