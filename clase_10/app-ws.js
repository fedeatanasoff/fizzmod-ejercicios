//const app = require('express')()
//const servidor = require('http').Server(app)
const servidor = require('http').createServer(handler)
const io = require('socket.io')(servidor)
const fs = require('fs')

//const http = require('http')
//http.request()
//node-fetch
//request

/*
app.use((req,res,next)=>{Todas las solicitudes})
app.use("/chat",(req,res,next)=>{Solo para /chat})
*/

function handler(req,res){
    /*
    ((req,res)=>{
        
    })(req,res)
    
    if(req.url == "/chat"){
        (()=>{

        })()
    }

    process.nextTick(()=>{
        let archivo = fs.createReadStream(__dirname+"/index-ws.html")
        res.writeHead(200,{"content-type":"text/html"})
        archivo.pipe(res)
    })

    setImmediate(()=>{
        let archivo = fs.createReadStream(__dirname+"/index-ws.html")
        res.writeHead(200,{"content-type":"text/html"})
        archivo.pipe(res)
    })
    */
    let archivo = fs.createReadStream(__dirname+"/index-ws.html")
    res.writeHead(200,{"content-type":"text/html"})
    archivo.pipe(res)
}

io.on("connection",socket=>{
    //Aa un solo socket
    socket.emit("nueva_con",{status:"ok",payload:"Te conectaste!"})
    //A todos los sockets
    socket.broadcast.emit("broadcast",{status:"ok",payload:"Te conectaste!"})

    //Escuchando si un socket me manda algo desde el cliente    
    socket.on("mensaje",data=>{
        console.log(data)
    })


    socket.on("disconnect",()=>{
        socket.username = ""    
    })

})

servidor.listen(8000)

