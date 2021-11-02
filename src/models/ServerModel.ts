export interface ServerBasicModel {
  bu: string;
  environment: string;
  type: string;
  sharedWith: string[];
  lastUpdated: string;
}

export interface ServerComputingModel {
  ramgb: number;
  cpu: number;
  diskgb: number;
  os: string;
  diskPartition: string[];
}

export interface ServerNetworkModel {
  hostname: string;
  serviceLANIp: string;
  loadBalancing: boolean;
}

export interface ServerModel {
  id: string;
  bu: string;
  serviceLANIp: string;
  hostname: string;
  cpu: string;
  ramgb: string;
  buApplicationName: string;
  vmStatus: string;
  ltmStatus: string;
  basic: ServerBasicModel;
  computing: ServerComputingModel;
  network: ServerNetworkModel;
}
