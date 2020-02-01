import { AppState } from '../app.store';
import { Socket } from 'socket.io';
import { SystemState } from '../../libs/types';

// By ref
export const getSystemState = (state: AppState): SystemState => state.system;
export const getSockets = (state: AppState): Socket[] => [...getSystemState(state).sockets];