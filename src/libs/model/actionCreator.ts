import { GenericAction, ActionCreator } from '../types/actions/index';

const actionCreator = (type: string): ActionCreator => {
  const actionCreatorFunc = <T>(payload: T ): GenericAction<T> => ({
      type,
      payload,
  });
  actionCreatorFunc.type = type;
  return actionCreatorFunc;
};

export default actionCreator;