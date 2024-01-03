
console.log("Start script")

const fs = require('fs');
const http = require('http');


const port = process.env.PORT || 3000;


const server = http.createServer((req, resp) => {

    if(req.url == '/') {
        resp.statusCode = 200;
        resp.setHeader = ('Content-Type', 'text/html');
        resp.end("<h1>This is http server default page</h1>");
    } else if(req.url == '/about'){
        resp.statusCode = 200;
        resp.setHeader = ('Content-Type', 'text/html');
        resp.end("<h1>this is http server about page</h1>");
    } else if(req.url == '/contact'){
        resp.statusCode = 200;
        resp.setHeader = ('Content-Type', 'text/html');
        resp.end("<h1>this is http server contact page</h1>");
    } else {
        resp.statusCode = 404;
        resp.setHeader = ('Content-Type', 'text/html');
        resp.end("<h1>Page not found</h1>");
    }
        
})

server.listen(port, () => {
    console.log(`server start. http://localhost:${port}`);
})