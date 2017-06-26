import { NgModule } from "@angular/core";
import { InfoRepository } from "./info.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
  providers: [InfoRepository, StaticDataSource]
})
export class ModelModule { }
