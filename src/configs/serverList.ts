import {
  CustomizeDisplayItemOptType,
  ExportExcelDropdownData,
  FilterOption,
} from '@xycloud/xycloud-ui-kit-2';

export const columns = [
  {
    title: 'ServiceLAN IP',
    dataIndex: 'serviceLANIp',
    key: 'serviceLANIp',
    slots: { customRender: 'serviceLANIp' },
    width: 179,
    sorter: (a: string, b: string) => a.length - b.length,
    sortDirections: ['descend', 'ascend'],
    fixed: 'left',
  },
  {
    title: 'BU',
    dataIndex: 'bu',
    key: 'bu',
    width: 150,
  },
  {
    title: 'Hostname',
    dataIndex: 'hostname',
    key: 'hostname',
    width: 223,
    sorter: (a: string, b: string) => a.length - b.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'CPU',
    dataIndex: 'cpu',
    key: 'cpu',
    width: 94,
    sorter: (a: string, b: string) => a.length - b.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'RAM(GB)',
    dataIndex: 'ramgb',
    key: 'ramgb',
    width: 140,
    sorter: (a: string, b: string) => a.length - b.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'BU Application Name',
    dataIndex: 'buApplicationName',
    key: 'buApplicationName',
    width: 171,
    sorter: (a: string, b: string) => a.length - b.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'VM Status',
    dataIndex: 'vmStatus',
    key: 'vmStatus',
    width: 186,
  },
  {
    title: 'LTM Status',
    dataIndex: 'ltmStatus',
    key: 'ltmStatus',
    slots: { customRender: 'ltmStatus' },
    width: 176,
  },
  {
    title: 'LTM Status',
    dataIndex: 'ltmStatus',
    key: 'ltmStatus',
    slots: { customRender: 'ltmStatus' },
    width: 142,
  },
  {
    title: 'LTM Status',
    dataIndex: 'ltmStatus',
    key: 'ltmStatus',
    slots: { customRender: 'ltmStatus' },
    width: 176,
  },
  {
    title: 'LTM Status',
    dataIndex: 'ltmStatus',
    key: 'ltmStatus',
    slots: { customRender: 'ltmStatus' },
    width: 176,
  },
  {
    title: 'LTM Status',
    dataIndex: 'ltmStatus',
    key: 'ltmStatus',
    slots: { customRender: 'ltmStatus' },
    width: 176,
  },
];

export const customizedDisplayItemOptions: CustomizeDisplayItemOptType[] = columns.map((item) => ({
  label: item.title,
  value: item.key,
}));

export const filterOptions: FilterOption[] = columns.map((item) => ({
  title: item.title,
  dataIndex: item.dataIndex,
}));

export const actionOptions = [
  { title: 'Resize', disabled: false },
  { title: 'Create from', disabled: false },
  { title: 'Rollback', disabled: false },
  { title: 'Decom', disabled: false },
];

export const exportExcelOptions: ExportExcelDropdownData[] = [
  { title: 'All Servers', value: '1' },
  { title: 'Current Environment', value: '2' },
];

export default {};
