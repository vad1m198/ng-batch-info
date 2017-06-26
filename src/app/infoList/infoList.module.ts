import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { InfoListComponent } from "./infoList.component";

@NgModule({
  imports: [ModelModule, BrowserModule],
  declarations: [InfoListComponent],
  exports: [InfoListComponent]
})
export class InfoListModule { }
