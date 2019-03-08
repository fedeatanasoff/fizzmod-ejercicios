/*
canales youtube
source decoded
*/
// funcion varidica
function foo(a,b){
  // var a = 1
  // var b = 2
  console.log(arguments)
}

foo(1,2)

/* Node.js - Bucle de eventos

patron modulo =>
(function(){})() <=

V8 (stack + heap) + web APIs + task queue = frontend JS
V8 + libuv (controla bucle de eventos )+ modulos nativos(javascript)
+ librerias C/C++ + bindings= backend JS

event loop =>
timers + IO network + IO FS + Process
setTimeout()
setInterval()
setImmediate()
XHR
fetch()
process.nextTick()

*/

let url = 'https:////jsonplaceholder.typicode.com/'
let usuarios = fetch(`${url}users`)

usuarios
  .then( data => data.json())
  .then( users => `${url}posts?userId=${users[6].id}`)
  .then( resp => resp.json())
  .then( data => {
    // ejemplo promise all
    return Promise.all( data.map( post => fetch(`${url}comments?postId=${post.id}`)))
  })
  .then( data => Promise.all( data.map( comment=> comment.json())))
  .then( data => console.log(data))
  .catch( err => console.log('Error: ', err))
