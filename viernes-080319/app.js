/**
 * * Streams
 * - writable: solo escritura
 * - readable: solo de lectura
 * - duplex: lectura y escritura
 * - transform: son un tipo especial de duplex en donde
 *  el output se calcula en base a una transformacion del input
 * 
 */

//  fileSystem. readfile => asincronico
const fs = require('fs')

// fs.readFile(__filename, (err, data)=> {
//     // es un buffer por defecto
//     console.log('data', data.toString())
// })

// * inicia un stream de modo pausado
// * los streams pueden estar en dos modos: paused o flowing
let archivo = fs.createReadStream(__dirname+"/index.html")
let nuevo = fs.createWriteStream(__dirname+"output.txt")

// * arrancar a consumirlo, el evento data de un readable se dispara 
// * cuando nos llega un chunk a traves del stream en forma de buffer
// * todos los streams del tipo readable tienen el evento 'data'
archivo.on('data', chunk => {
    // console.log('nuevo chunk: ', chunk );
    /*
    * todos los streams del tipo writable implementan el metodo
    * write para escribir por stream
    */
    nuevo.write(chunk)
})

// * https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93
// * https://elabismodenull.wordpress.com/2017/03/28/el-manejo-de-streams-en-nodejs/
/*
 * TCP/IP
 * HTTP 
 *  
 * Request (cliente) -------------------------------
 * METODO - URL - VERSION
 * Headers
 * body
 *  name: 'fede'
 * GET /index.html http/1.1
 * host : www.google.com
 * Content-type : text/plain
 * 
 * Respuesta (servidor) -----------------------------
 * VERSION CODIGO MENSAJE
 * headers
 * body
 * http:/1,1 200 ok
 * content-type: text/plain
 * content-lenght: 124
 * Access-content-allow-origin: *
 * Access-content-allow-origin: google.com
 * Access-content-allow-origin: localhost
 * 
 * CORS: cross origin resource sharing es una politica de
 * seguridad para compartir recursos a traves de dominios
 * 
 */

 // * PIPES - inicias un streaming desde un recurso y la redirigis a su output
//  leo - redirijo - output
// archivo.pipe(nuevo)


// * modulo NET: sirve para hacer servidores de conexion TCP *  
const net = require('net')
// * en un servidor de tcp recibimos una instancia de net.socket
// * el cual implementa la interfaz de stream duplex
// * osea que podemos consumirlo y escribirlo

let mensajes = []

const servidor = net.createServer( socket => {
    
    mensajes.push(socket)
    /*
     * en un servidor TCP o HTTP siempre hay que cerrar la respuesta 
     * del cliente, de lo contrario el mismo queda en Timeout 
     */
     socket.write('Estableciendo conexion \n\r')
     socket.write('Bienvenido \n\r')
    socket.on('data', chunk => {
        console.log('consola servidor: ', chunk.toString())
        socket.write('conexion telnet: \n\r', chunk)

        for(let index = 0; index < mensajes.length; index ++){
            const s = index[index]
            s.write(chunk)
        }
    })

    //  socket.end('cerrando conexion')

    
}).listen(8000, ()=> console.log('iniciando servidor en el puerto 8000'))
