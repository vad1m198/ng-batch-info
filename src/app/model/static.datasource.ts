import { Injectable } from "@angular/core";
import { BatchInfo } from "./info.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
  private infos: BatchInfo[] = [
    new BatchInfo("1", "1Extended status", "1Status"),
    new BatchInfo("2", "2Extended status", "2Status"),
    new BatchInfo("3", "3Extended status", "3Status"),
    new BatchInfo("4", "4Extended status", "4Status"),
    new BatchInfo("5", "5Extended status", "5Status"),
  ];

  getInfos(): Observable<BatchInfo[]> {
    return Observable.from([this.infos]);
  }
}
