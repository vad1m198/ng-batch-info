import { Injectable } from "@angular/core";
import { BatchInfo } from "./info.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

export interface RemotingOptions {
	buffer?: boolean,
	escape?: boolean,
	timeout?: number
}


@Injectable()
export class StaticDataSource {
  private infos: BatchInfo[] = [
    new BatchInfo("1", "1Extended status", "1Status"),
    new BatchInfo("2", "2Extended status", "2Status"),
    new BatchInfo("3", "3Extended status", "3Status"),
    new BatchInfo("4", "4Extended status", "4Status"),
    new BatchInfo("5", "5Extended status", "5Status"),
    new BatchInfo("6", "6Extended status", "6Status"),
    new BatchInfo("7", "7Extended status", "7Status"),
    new BatchInfo("8", "8Extended status", "8Status"),
    new BatchInfo("9", "9Extended status", "9Status"),
    new BatchInfo("10", "10Extended status", "10Status"),
  ];

  private _controller: string = "Batches_Info_Controller";

  getInfosPromise(pageNumber:number,recordsNumber:number,timePeriod:string,jobStatus:string ): Promise<BatchInfo[]> {
    let params = [];
    params.push(JSON.stringify({event:'loadBatchesInfos',jobStatus:jobStatus,pageNumber:pageNumber,recordsNumber:recordsNumber,timePeriod:timePeriod}));
    return new Promise((resolve, reject) => {
      this.execute('remoteHandler', params )
            .then(res => resolve(JSON.parse(res.aRecords)))
            .catch(err => reject(err))
    })

  }

  private execute(method: string, params: Array<any>, config?: RemotingOptions): Promise<any> {
    console.log('execute >>> ', method, params)
		let ctrl: any = window[this._controller] || {};

		config = config || { escape: false }

		if (ctrl.hasOwnProperty(method)) {

			let methodFunc = ctrl[method];
			let directCfg = methodFunc.directCfg;

			return new Promise((resolve, reject) => {
				// The wrong number of parameters were included
				if (params.length !== directCfg.method.len) {
					reject('Wrong number of parameters included');
					return;
				}

				let callback = function(res, err) {
					if (res) {
            let oResult = <any>{};
            try {
              oResult = JSON.parse(res);
            } catch(e) {
              oResult = {status : 'error', message : 'JSON Parsing error'};
            }

            if(oResult.status && oResult.status === 'error') {
              reject('Remoting Error : ' + oResult.message);
            }

            resolve(oResult);

					} else {
						reject(err.message);
					}
				}

				params.push(callback);
				params.push(config);
				ctrl[method].apply(null, params);
			});
		} else {
			return new Promise((resolve, reject) => {
				reject('The requested method does not exist on ' + this._controller);
			});
		}
  }

}
