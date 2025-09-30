const { createServer } = require('node:http');

// Use environment PORT for hosting platforms, fallback to 3000 for local development
const port = process.env.PORT || 3000;
// Use 0.0.0.0 instead of 127.0.0.1 to allow external connections
const hostname = '0.0.0.0';

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running on port ${port}`);
});
