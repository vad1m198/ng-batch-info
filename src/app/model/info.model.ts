export interface IBatchInfo {
  Id?: string;
  ExtendedStatus?: string;
  Status?: string;
  CreatedDate?:number|string;
  JobItemsProcessed?:number;
  TotalJobItems?:number;
  ApexClass?:IApexClass;
}

export interface IApexClass {
  Id?: string;
  Name?: string;
}


