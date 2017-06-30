import { Injectable } from "@angular/core";
import { IBatchInfo } from "./info.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

export interface RemotingOptions {
	buffer?: boolean,
	escape?: boolean,
	timeout?: number
}


@Injectable()
export class StaticDataSource {

  private _controller = "Batches_Info_Controller";

  getInfosPromise(pageNumber:number,recordsNumber:number,timePeriod:string,jobStatus:string ): Promise<IBatchInfo[]> {
    const params = [];
    params.push(JSON.stringify({event:'loadBatchesInfos',jobStatus:jobStatus,pageNumber:pageNumber,recordsNumber:recordsNumber,timePeriod:timePeriod}));
    return new Promise((resolve, reject) => {
      this.execute('remoteHandler', params )
            .then(res => resolve(<IBatchInfo[]>JSON.parse(res.aRecords)))
            .catch(err => reject(err))
    })

  }

  private execute(method: string, params: Array<any>, config?: RemotingOptions): Promise<any> {
    //console.log('execute >>> ', method, params)
		const ctrl: any = window[this._controller] || {};

		config = config || { escape: false }

		if (ctrl.hasOwnProperty(method)) {

			const methodFunc = ctrl[method];
			const directCfg = methodFunc.directCfg;

			return new Promise((resolve, reject) => {
				// The wrong number of parameters were included
				if (params.length !== directCfg.method.len) {
					reject('Wrong number of parameters included');
					return;
				}

				const callback = function(res, err) {
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
