/* eslint-disable no-param-reassign */
import type { MutationTree } from 'vuex';
import { MutationTypes } from './types';
import type { State } from './state';
import { Mutations } from './declarations';
import { DashboardInterface } from '@/interfaces/DashboardInterface';

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET](state, payload: DashboardInterface) {
    state.data = payload;
  },
};

export default { mutations };
