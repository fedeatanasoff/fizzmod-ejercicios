/*
Node: .js .json
incluir modulos => require()
exportar modulos =>
module.exports = {}
module.exports.a = 1
module.exports = {
  a: 1
}

tambien se puede usar exports salvo de una manera
exports = a . la variable exports es local del modulo
entonces no podemos pisarla con otro valor

Buffer - Stream - EventEmitter => eventos pero del backend
http://es6-features.org/#Constants
*/

const events = require('events')
let {EventEmitter} = events


let miEvento = new EventEmitter()
miEvento.on('click', (number)=>{
  setImmediate( ()=> console.log('soy un evento del backend ejecutandome con setImmediate() '))
  process.nextTick( ()=> console.log('next tick evento'))
  console.log('number: ', number)
})

// miEvento.emit('click', 10)
// console.log('hey!')

let buf = new Buffer('hello friend')
console.log('buffer : ', buf)
console.log('buffer json: ', buf.toJSON())
console.log('buffer string: ', buf.toString())

let buf2 = new Buffer(6)
buf2.write('hellooooooo')
console.log('buffer 2 : ', buf2)
console.log('buffer 2 json: ', buf2.toJSON())
console.log('buffer 2 string: ', buf2.toString())
// Stream  => la transicion de data de un lugar a otro
// buffer  =>
