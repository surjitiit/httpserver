const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, resp) => {

    resp.statusCode = 200;
    resp.setHeader = ('Content-Type', 'text/html');

    
    if (fs.existsSync('pages'+req.url+'.html')) {
        const htmlData = fs.readFileSync('pages'+req.url+'.html');
        resp.end(htmlData.toString());
    } else if (req.url == '/') {
        const htmlData = fs.readFileSync('pages/home.html');
        resp.end(htmlData.toString());
    } else {
        resp.statusCode = 402;
        const htmlData = fs.readFileSync('error.html');
        resp.end(htmlData.toString());
    }
})

server.listen(port, () => {
    console.log(`server start. http://localhost:${port}`);
})
