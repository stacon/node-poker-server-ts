import { Socket } from 'socket.io';

type SystemState = {
  sockets: Socket[]
}

export default SystemState;