/* eslint-disable no-unused-vars */
import type { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import type { State } from './state';
import type { Namespaced, ActionContext, GetterContext } from '@/store/declarations';
import { MutationTypes, ActionTypes } from './types';
import { ServerModel } from '@/models/ServerModel';
import { DashboardInterface } from '@/interfaces/DashboardInterface';

export type Mutations<S = State> = {
  [MutationTypes.SET](state: S, payload: DashboardInterface): void;
};

export type Getters = {
};

export interface Actions {
  [ActionTypes.GET]({ commit }: ActionContext<State, Getters>, payload: any): void;
}

export type ModuleName = 'dashboard';

export type NamespacedGetters = Namespaced<Getters, ModuleName>;
export type NamespacedMutations = Namespaced<Mutations, ModuleName>;
export type NamespacedActions = Namespaced<Actions, ModuleName>;

export { State };

export type Store<S = State> = Omit<VuexStore<S>, 'commit' | 'dispatch' | 'getters'> & {
  commit<T extends keyof NamespacedMutations, P extends Parameters<NamespacedMutations[T]>[1]>(
    type: T,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<NamespacedMutations[T]>;
} & {
  dispatch<T extends keyof NamespacedActions, P extends Parameters<NamespacedActions[T]>[1]>(
    type: T,
    payload?: P,
    options?: DispatchOptions,
  ): ReturnType<NamespacedActions[T]>;
} & {
  getters: {
    [T in keyof NamespacedGetters]: ReturnType<NamespacedGetters[T]>;
  };
};
