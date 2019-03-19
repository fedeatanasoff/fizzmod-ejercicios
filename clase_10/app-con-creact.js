const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    let archivo = fs.createReadStream(__dirname+"/index.html");
    res.writeHead(200,{"content-type":"text/html"})
    archivo.pipe(res)
})

server.listen(8000)