import { Injectable } from "@angular/core";
import { BatchInfo } from "./info.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class InfoRepository {
  private infos: BatchInfo[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getInfos().subscribe(data => this.infos = data);
  }

  getInfos(): BatchInfo[] {
    return this.infos;
  }

}
