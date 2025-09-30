const { createServer } = require('node:http');

// Use environment PORT for hosting platforms, fallback to 3000 for local development
const port = process.env.PORT || 3000;
// Use 0.0.0.0 instead of 127.0.0.1 to allow external connections
const hostname = '0.0.0.0';

const server = createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // Handle all requests
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Hello World App</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>Server is running successfully on ${req.headers.host}</p>
        <p>Request URL: ${req.url}</p>
    </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running on port ${port}`);
});
