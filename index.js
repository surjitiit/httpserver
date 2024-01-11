const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, resp) => {


    const fileData = fs.readFileSync('./routes.json', 'utf-8', function (err, fileContents) {
        if (err) throw err;
        
        return fileContents;
    });

    var fileFormatedData = JSON.parse(fileData);
    var pagePath = '';
    if(req.url in fileFormatedData) {
        pagePath = fileFormatedData[req.url];
    } else {
        pagePath = 'pages/error.html';
    }
    
    if (fs.existsSync(pagePath)) {
        resp.statusCode = 200;
        resp.setHeader = ('Content-Type', 'text/html');

        var htmlData = fs.readFileSync(pagePath);
        resp.end(htmlData.toString());
    } else {
        resp.statusCode = 402;
        resp.end('page not exist');
    }
})

server.listen(port, () => {
    console.log(`server start. http://localhost:${port}`);
})
