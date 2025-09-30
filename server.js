let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');

const PORT = process.env.PORT || 8080;

http.createServer(function (req, res) {
    // Parse URL to get pathname without query parameters
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;
    
    if (pathname === '/' || pathname === '/index.html') {
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