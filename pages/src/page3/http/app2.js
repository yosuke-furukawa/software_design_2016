const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.end(process.version);
});

server.on('listening', () => {
  console.log('listening on 8080');
});

server.listen(8080);

