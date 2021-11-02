import { ServerModel } from '@/models/ServerModel';
import { DashboardModel } from '@/models/DashboardModel';

export function formatServer(item: any): ServerModel {
  return {
    id: item.id,
    bu: item.bu[0].label,
    serviceLANIp: item.service_lan_ip[0],
    hostname: item.hostname,
    cpu: item.cpu,
    ramgb: item.ram_gb,
    buApplicationName: item.bu_application,
    vmStatus: ['Running', 'Terminated'][Math.floor(Math.random() * 10) % 2],
    ltmStatus: ['Enabled', 'Disabled'][Math.floor(Math.random() * 10) % 2],
    basic: {
      bu: item.bu.length > 0 ? item.bu[0].label : '',
      environment: item.env.label,
      type: item.server_type,
      sharedWith: ['BU-008', 'BU-009'],
      lastUpdated: item.provision_date,
    },
    computing: {
      ramgb: item.ram_gb,
      cpu: item.cpu,
      diskgb: item.disk_capacity_gb,
      os: item.os.label,
      diskPartition: item.disk_partition.map((dp: any) => `${dp.drive}:${dp.size}${dp.unit}`),
    },
    network: {
      hostname: item.service_lan_ip[0],
      serviceLANIp: item.service_lan_ip[0],
      loadBalancing: [true, false][Math.floor(Math.random() * 10) % 2],
    },
  };
}

export function formatDashboard(item: any): DashboardModel {
  return item;
}
export default { formatServer, formatDashboard };
