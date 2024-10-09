const http = require("http")
const fs = require("fs")
const url = require('url');
//const myServer = http.createServer(app); //express used http module internally

const myServer = http.createServer((req, res) => { 
    //console.log("New req received")
    const log = `${Date.now()}: ${req.method}  ${req.url} New Request received\n`
    if(req.url ==="/favicon.ico") return res.end()
    fs.appendFile('./log.txt', log, (err, data) => {
        const myUrl = url.parse(req.url,true)
        //console.log(myUrl.pathname)
        switch (myUrl.pathname) {
            case '/':  if(req.method=='GET')res.end("Homepage") 
            break;
            case '/about':
                const username = myUrl.query.myname
                const userId=myUrl.query.userId
                res.end(`Hi ${username} : ${userId}`)
            break;                
            case '/searchstudyeverywhere':
                const topper = myUrl.query.topper
                const keyfrom=myUrl.query.keyfrom
                res.end(`Hi ${topper} : ${keyfrom}`)
            break;
            case  "/signup":
                if (req === "GET") res.end("this is signup form")
                else if (req.method === "POST") {
                //db query
                    res.end("Success")
                }
            break; 
            default:res.end("404 not found");
        }
        
    })
    
    
    
})
myServer.listen(3000, () => {
        console.log("Server started")
})
// function myHandler(req, res) {
//     //console.log("New req received")
//     const log = `${Date.now()}: ${req.method}  ${req.url} New Request received\n`
//     if (req.url === "/favicon.ico") return res.end()
//     fs.appendFile('./log.txt', log, (err, data) => {
//         const myUrl = url.parse(req.url, true)
//         //console.log(myUrl.pathname)
//         switch (myUrl.pathname) {
//             case '/': if (req.method == 'GET') res.end("Homepage")
//                 break;
//             case '/about':
//                 const username = myUrl.query.myname
//                 const userId = myUrl.query.userId
//                 res.end(`Hi ${username} : ${userId}`)
//                 break;
//             case '/searchstudyeverywhere':
//                 const topper = myUrl.query.topper
//                 const keyfrom = myUrl.query.keyfrom
//                 res.end(`Hi ${topper} : ${keyfrom}`)
//                 break;
//             case "/signup":
//                 if (req === "GET") res.end("this is signup form")
//                 else if (req.method === "POST") {
//                     //db query
//                     res.end("Success")
//                 }
//                 break;
//             default: res.end("404 not found");
//         }
        
//     })
// }
//const myServer = http.createServer(myHandler);
