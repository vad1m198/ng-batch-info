import { Component,Input,Output,EventEmitter } from "@angular/core";
import { IBatchInfo } from "../model/info.model";
import { StaticDataSource } from "../model/static.datasource";

@Component({
  selector: "info-card",
  templateUrl: "info-card.component.html",
  styleUrls: ['info-card.component.css']
})
export class InfoCardComponent {
  @Input() infoObj: IBatchInfo;
  @Input() type: String;
  @Output() removeBatchFromList: EventEmitter<any> = new EventEmitter();
  @Output() showToast: EventEmitter<any> = new EventEmitter();

  constructor(private dataSource :StaticDataSource) {}

  get buttonLabel():string {
    return this.type == 'Failed' ? 'Rerun' : 'Stop';
  }

  get processedPercent():number {
      return Math.round(this.infoObj.JobItemsProcessed * 100 / this.infoObj.TotalJobItems);
  }

  clicked() {
    if(this.type == 'Failed') {
      this.rerunBatch();
    } else {
      this.stopBatch();
    }
  }

  private stopBatch():void {
    this.dataSource.stopBatchByid(this.infoObj.Id)
        .then(batchId => {this.removeBatchFromList.emit(batchId); this.showToast.emit({type:'info',message:'Batch was stopped successfully!'})})
        .catch(err =>this.showToast.emit({type:'error',message:err}));
  }

  private rerunBatch():void {
    this.dataSource.rerunBatchByName(this.infoObj.ApexClass.Name)
        .then(res => this.showToast.emit({type:'info',message:'Batch was started successfully!'}))
        .catch(err => this.showToast.emit({type:'error',message:err}));
  }

}

