import http from '@/utils/http/axios';
import { formatDashboard } from '@/utils/formatter';
import { DashboardModel } from '@/models/DashboardModel';

export const getAll = async (): Promise<DashboardModel> => {
  const response = await http.get<any[]>('/dashboard');
  return response.data.map(formatDashboard);
};

export default { getAll };
