import { Component,Input } from "@angular/core";
import { IBatchInfo } from "../model/info.model";
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
            }
            :host .select-but-container {
              display: flex;
              align-items: flex-end;
              justify-content: space-between;
            }`]
})
export class InfoListComponent {
    @Input() type:string;
    public pageNumber:number = 0;
    public recordsNumber:number = 10;
    public timePeriod:string = 'LAST_N_YEARS:10';
    public infos:IBatchInfo[] = [];
    public isLoading = true;
    public toastType:string = 'info';
    public toastMessage:string = '';

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

    removeBatchFromList(batchId):void{
      this.infos = this.infos.filter(info => info.Id != batchId);
    }

    showToast(event):void {
      this.toastType = event.type;
      this.toastMessage = event.message;
      if(this.toastType != 'error') {
        setTimeout(() => {
          this.toastMessage = '';
        }, 3000);
      }

    }

    onPaginationClick(buttonName):void{
      if(buttonName == 'Next') this.pageNumber++;
      if(buttonName == 'Previous') this.pageNumber--;
      this.fetchInfos();
    }

    private fetchInfos():void {
      this.isLoading = true;
      this.dataSource.getInfosPromise(this.pageNumber,this.recordsNumber,this.timePeriod,this.type )
        .then(res => {this.isLoading = false;this.infos = res})
        .catch(err => {this.isLoading = false;this.toastType = 'error';this.toastMessage = err});
    }

}
