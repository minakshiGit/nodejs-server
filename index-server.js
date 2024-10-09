const http = require("http")
const fs =require("fs")
const myServer = http.createServer((req, res) => {
    //console.log("New req received")
    const log = `${Date.now()}:${req.url} New Request received\n`
    if(req.url ==="/favicon.ico") return res.end()
    fs.appendFile('./log.txt', log, (err, data) => {
      
        switch (req.url) {
            case '/':res.end("Homepage")
            break;
            case '/about':res.end("Welcome to About us page")
            break;
            default:res.end("404 not found");
        }
        
    })
    
    
    
})
myServer.listen(3000, () => {
        console.log("Server started")
})