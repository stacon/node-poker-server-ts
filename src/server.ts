import http from 'http';

// import store from './store/store';

import config from './env/dev.config';
import appendSocketsController from './models/Socket/socket.controller';
import store from './models/app.store';

const server = http.createServer((req,resp) => {
  resp.statusCode = 200;
  resp.write("Server state is available by dev tools")
  resp.end()
});

appendSocketsController(server, store);

server
server.listen(config.PORT);

console.log(`Server running on port ${config.PORT}`);