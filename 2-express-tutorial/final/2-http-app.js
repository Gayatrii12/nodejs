const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync("./navbar-app/style.css");
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url === '/')
    {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(homePage)
    res.end()
    }
    else if (url === "/styles.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(homeStyles);
      res.end();
    } else if (url === "/browser-app.js") {
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(homeLogic);
      res.end();
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>Page Not Found</h1>");
      res.end();
    }
})

server.listen(5000)