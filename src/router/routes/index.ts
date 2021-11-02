import { RouteRecordRaw } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Server from '@/views/Server/List.vue';
import ServerDetail from '@/views/Server/Detail.vue';
import LoadBalancing from '@/views/LoadBalancing.vue';
import ChangeLog from '@/views/ChangeLog.vue';

export default [
  {
    path: '/',
    redirect: 'server-list',
  },
  {
    name: 'server-list',
    path: '/server-list',
    component: Server,
  },
  {
    name: 'server-detail',
    path: '/server/:id',
    component: ServerDetail,
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
  },
  {
    name: 'load-balancing',
    path: '/load-balancing',
    component: LoadBalancing,
  },
] as RouteRecordRaw[];
