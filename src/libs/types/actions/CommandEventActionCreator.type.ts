import { ActionCreator } from '.';

type CommandEventActionCreator = ActionCreator & {
  succeeded: ActionCreator,
  failed: ActionCreator,
}

export default CommandEventActionCreator;