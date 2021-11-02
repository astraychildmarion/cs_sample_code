import type { ActionTree } from 'vuex';
import { ActionTypes } from './types';
import { defaultOptions } from '@/store/utils';
import type { State } from './state';
import type { RootState } from '@/store/declarations';
import { Actions } from './declarations';
import { getAll } from '@/services/DashboardService';

export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.GET]({ commit }) {
    const data = await getAll();
    commit('dashboard/SET', data, defaultOptions);
  },
};

export default { actions };
