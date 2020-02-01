import GenericAction from './GenericAction.type';

type ActionCreator = {
  <T>(payload: T): GenericAction<T>;
  type: string
}

export default ActionCreator;