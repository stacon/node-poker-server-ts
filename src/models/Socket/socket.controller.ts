import http from 'http';
import SocketIO from 'socket.io';
import { onSocketConnect } from '../System/system.actions.creator';
import { Store } from 'redux';

const appendSocketsController = (server: http.Server, store: Store) => {
  const io = SocketIO(server);

  io.on('connection', (socket: SocketIO.Socket) => {
    store.dispatch(onSocketConnect({socket}));
  })
}

export default appendSocketsController