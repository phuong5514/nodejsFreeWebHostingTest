let http = require('http');
let fs = require('fs');
let path = require('path');

const PORT = process.env.PORT || 8080;

http.createServer(function (req, res) {
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'frontend/index.html');
        
        fs.readFile(filePath, function(error, content) {
            if (error) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end(`Error: ${error.code}`);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content);
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 Not Found');
    }
}).listen(PORT);

console.log(`Server running on port ${PORT}`);