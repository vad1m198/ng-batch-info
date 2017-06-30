import { Component,Input } from "@angular/core";
import { BatchInfo } from "../model/info.model";

@Component({
  selector: "info-card",
  templateUrl: "info-card.component.html",
  styleUrls: ['info-card.component.css']
})
export class InfoCardComponent {
  @Input() infoObj: BatchInfo;
  @Input() type: String;

  get Id():string {
    return this.infoObj.Id;
  }
  get Status():string {
    return this.infoObj.Status;
  }
  get ExtendedStatus():string {
    return this.infoObj.ExtendedStatus;
  }
  get buttonLabel():string {
    return this.type == 'Failed' ? 'Rerun' : 'Stop';
  }

  clicked() {
    console.log('button clicks');
  }

}

