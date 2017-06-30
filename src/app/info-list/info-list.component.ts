import { Component,Input } from "@angular/core";
import { BatchInfo } from "../model/info.model";
import { StaticDataSource } from "../model/static.datasource";

@Component({
  selector: "info-lst",
  templateUrl: "info-list.component.html",
  styles: [`:host .sl-list {
              display: flex;
              flex-wrap: wrap;
            }
            :host .select-container {
              width:200px;
            }`]
})
export class InfoListComponent {
    @Input() type:string;
    private pageNumber:number = 0;
    private recordsNumber:number = 10;
    public timePeriod:string = 'LAST_N_YEARS:10';
    public infos:BatchInfo[] = [];

    constructor(private dataSource :StaticDataSource) {
    }

    ngAfterViewInit() {
      this.fetchInfos();
    }

    get infoType(): string {
      return this.type;
    }

    onSelectChange(newValue):void {
      this.timePeriod = newValue;
      this.fetchInfos();
    }

    private fetchInfos():void {
      this.dataSource.getInfosPromise(this.pageNumber,this.recordsNumber,this.timePeriod,this.type )
        .then(res => this.infos = res)
        .catch(err => console.error(err));
    }

}
