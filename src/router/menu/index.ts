import { SiderData, HeaderUserMenu } from '@xycloud/xycloud-ui-kit-2';
import { NumberOutlined, MenuOutlined, DeploymentUnitOutlined } from '@ant-design/icons-vue';

/**
 * Please import menu array from '@/router/index' for consistency
 */

export interface SiderMenuItem extends SiderData {
  iconComponent: any;
  vue: {
    /**
     * The key using on Vue v-for item
     */
    itemKey: string;
    /**
     * The name using on Vue named slot
     */
    templateName: string;
  };
}

export const siderMenuItems: SiderMenuItem[] = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'NumberOutlined',
    iconComponent: NumberOutlined,
  },
  {
    key: 'server-list',
    name: 'Server List',
    path: '/server-list',
    icon: 'MenuOutlined',
    iconComponent: MenuOutlined,
  },
  {
    key: 'load-balancing',
    name: 'Load Balancing',
    path: '/load-balancing',
    icon: 'DeploymentUnitOutlined',
    iconComponent: DeploymentUnitOutlined,
  },
].map((item, index) => ({
  ...item,
  vue: {
    itemKey: `sider_${index}`,
    templateName: `sider_${item.icon}`,
  },
}));

export const siderData: SiderData[] = siderMenuItems.map((item) => ({
  key: item.key,
  name: item.name,
  path: item.path,
  icon: item.icon,
  iconPath: item.iconPath,
}));

export const appListDrawerData = [
  {
    icon: 'control',
    name: 'Console',
    path: 'control',
    key: '0',
  },
  {
    iconPath: './Icon_interface_RM_outline.svg',
    name: 'Request Manager',
    path: 'requestmanager',
    key: '1',
  },
  {
    iconPath: './Icon_interface_SI_outline.svg',
    name: 'Server Inventory',
    path: 'serverinventory',
    key: '2',
  },
  {
    iconPath: './Icon_interface_XYC_outline.svg',
    name: 'XY Compute',
    path: 'xycompute',
    key: '3',
  },
  {
    iconPath: './Icon_interface_IAM_outline.svg',
    name: 'XY IAM',
    path: 'xyiam',
    key: '4',
  },
] as SiderData[];

export const manageMenu = [
  { name: 'XY IAM', url: '#' },
  { name: 'Wooshpush preferences', url: '#' },
] as HeaderUserMenu[];

export const userMenu = [] as HeaderUserMenu[];
