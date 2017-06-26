import { NgModule } from "@angular/core";
import { SlTabs } from "./tabs.component";
import { SlTab,SlTabHeading,SlTabContent } from "./tab.component";
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [BrowserModule],
  declarations: [SlTabs,SlTab,SlTabHeading,SlTabContent],
  exports: [SlTabs,SlTab,SlTabHeading,SlTabContent]
})
export class TabsModule { }
