import { Component,Input } from "@angular/core";
import { BatchInfo } from "../model/info.model";
import { InfoRepository } from "../model/info.repository";

@Component({
  selector: "info-lst",
  templateUrl: "info-list.component.html",
  styles: [`:host .sl-list {
              display: flex;
              flex-wrap: wrap;
            }`]
})
export class InfoListComponent {
    @Input() type:string;

    constructor(private repository: InfoRepository) {}

    get infos(): BatchInfo[] {
      return this.repository.getInfos();
    }

    get infoType(): string {
      return this.type;
    }

}
