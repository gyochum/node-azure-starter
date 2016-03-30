var server = require('http');
var port = process.env.PORT || 1337;

console.log(port);

server.createServer(function(request, response){
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Hello Azure\n');
}).listen(port);
