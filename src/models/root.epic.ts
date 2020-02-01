import { combineEpics } from 'redux-observable';
import systemEpic from './System/system.epic';

const rootEpic = combineEpics(
  systemEpic,
);

export default rootEpic;