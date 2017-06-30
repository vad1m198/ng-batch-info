import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { InfoListComponent } from "./info-list.component";
import { InfoCardModule } from "../info-card/info-card.module";

@NgModule({
  imports: [ModelModule, BrowserModule,InfoCardModule,FormsModule],
  declarations: [InfoListComponent],
  exports: [InfoListComponent]
})
export class InfoListModule { }
