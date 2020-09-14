'use strict';

const http = require("http");
const hostname = "127.0.0.1"; /* This IP address is the local host, local look back. It means the server is running off local machine */
const port = 3333; /* Anything 3000-5000 is good to use */

const server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain")
    response.end("Does this work?");
});

server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}`);
});