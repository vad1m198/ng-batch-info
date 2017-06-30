import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { InfoCardComponent } from "./info-card.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [InfoCardComponent],
  exports: [InfoCardComponent]
})
export class InfoCardModule { }
