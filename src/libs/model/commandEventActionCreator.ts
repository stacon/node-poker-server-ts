import actionCreator from './actionCreator';
import { CommandEventActionCreator } from '../types/actions';

const commandEventActionCreator = (type: string): CommandEventActionCreator => {
  const action = <CommandEventActionCreator>actionCreator(type);
  action.succeeded = actionCreator(`${type}_SUCCEEDED`);
  action.failed = actionCreator(`${type}_FAILED`);

  return action;
};

export default commandEventActionCreator