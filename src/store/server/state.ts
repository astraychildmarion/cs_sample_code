import { ServerInterface } from '@/interfaces/SeverInterface';

export const state = {
  list: [] as ServerInterface[],
};

export type State = typeof state;
