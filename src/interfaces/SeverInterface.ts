/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import {
  ServerModel,
  ServerBasicModel,
  ServerNetworkModel,
  ServerComputingModel,
} from '@/models/ServerModel';
import { IDictionary } from '@/interfaces/UtilityInterface';

export interface ServerInterface extends ServerModel {}

export interface ServerBasicInterface extends ServerBasicModel, IDictionary {}

export interface ServerComputingInterface extends ServerComputingModel, IDictionary {}

export interface ServerNetworkInterface extends ServerNetworkModel, IDictionary {}

export interface ServerDetailInterface {
  basic: ServerBasicInterface;
  computing: ServerComputingInterface;
  network: ServerNetworkInterface;
}
