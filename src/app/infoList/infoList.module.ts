import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TabsModule } from "../tabs/tabs.module";
import { InfoListComponent } from "./infoList.component";

@NgModule({
  imports: [ModelModule, BrowserModule,TabsModule],
  declarations: [InfoListComponent],
  exports: [InfoListComponent]
})
export class InfoListModule { }
