import { Component } from "@angular/core";
import { BatchInfo } from "../model/info.model";
import { InfoRepository } from "../model/info.repository";

@Component({
  selector: "infolst",
  templateUrl: "infoList.component.html"
})
export class InfoListComponent {
    constructor(private repository: InfoRepository) {}
    get infos(): BatchInfo[] {
      return this.repository.getInfos();
    }

}
