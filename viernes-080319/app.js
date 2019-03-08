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
    console.log('nuevo chunk: ', chunk );
    /*
    * todos los streams del tipo writable implementan el metodo
    * write para escribir por stream
    */
    nuevo.write(chunk)
})

// * https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93

/*
 * TCP/IP
 * HTTP 
 *  
 * Request (cliente)
 * METODO - URL - VERSION
 * Headers
 * body
 *  name: 'fede'
 * GET /index.html http/1.1
 * host : www.google.com
 * Content-type : text/plain
 */

