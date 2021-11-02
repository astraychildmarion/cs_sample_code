import http from '@/utils/http/axios';
import { ServerModel } from '@/models/ServerModel';
import { formatServer } from '@/utils/formatter';

export const getAll = async (): Promise<ServerModel[]> => {
  const response = await http.get<any[]>('/servers');
  return response.data.map(formatServer);
};

export default { getAll };
