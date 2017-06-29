import { Component,Optional } from "@angular/core";
import { BatchInfo } from "../model/info.model";
import { InfoRepository } from "../model/info.repository";
import { Config } from '../util/Config';

@Component({
  selector: "infolst",
  templateUrl: "infoList.component.html"
})
export class InfoListComponent {
    constructor(private repository: InfoRepository, private config: Config) {}
    get infos(): BatchInfo[] {
      return this.repository.getInfos();
    }

    get iconUrl(): string {
      return this.config.sldsUrl + '/assets/icons/utility-sprite/svg/symbols.svg#announcement';
    }
}
