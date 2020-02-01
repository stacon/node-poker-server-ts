import { onSocketConnect } from './system.actions.creator';
import { SystemState } from '../../libs/types';

const initialState: SystemState = {
  sockets: [],
}

export default function (state: SystemState = initialState, action: any) {
  switch (action.type) {

    case (onSocketConnect.succeeded.type): {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return state;
    }
  };
};