import { map } from 'rxjs/internal/operators/map';
import { ofType, combineEpics, ActionsObservable, StateObservable, } from "redux-observable";

import { getSockets } from './system.selectors';
import { AppState } from '../app.store';
import { onSocketConnect } from './system.actions.creator';
import { Client } from 'socket.io';
import { GenericAction } from '../../libs/types/actions';

const onCloseModalEpic = (action$: ActionsObservable<GenericAction<Client>>, state$: StateObservable<AppState>) => action$.pipe(
  ofType(onSocketConnect.type),
  map(({payload : socket}: GenericAction<Client>)=> {
    const oldSockets = getSockets(state$.value)
    const sockets = [...oldSockets, socket];
    return onSocketConnect.succeeded({sockets})
  })
);

export default combineEpics(
  onCloseModalEpic,
)