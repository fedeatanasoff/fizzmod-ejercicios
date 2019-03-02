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
