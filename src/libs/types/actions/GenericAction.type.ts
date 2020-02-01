import { Action } from 'redux';

type GenericAction<T> = Action & {
  payload: T;
}

export default GenericAction;