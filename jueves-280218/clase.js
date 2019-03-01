/*
*   GIT 
*   REVERT: 
    RESET: mueve el head a un hash anterior. --soft, --mixed, --hard
    REFLOG: es un log de acciones hechas en el repo
*
*/

/* 
OBJETOS
primitivos: string, number, boolean, undefined, null
objetos: object, array, function, date, document, dom, geolocation

los primitivos se pasan por referencia, los otros por valor
contecto: el contexto de una funcion en lineas generales 
nos va a dar una referencia de que objeto contiene esa funcion y esta en la variable 'this'
El contexto no es estatico y puede variar por lugar de ejecucion o decision del programador.

Function.call({ctx:'call'})
Function.apply({ctx:'call'})
Function.bind()

new : ejecuta la funcion que tiene al lado reasingandole el contexto con un objeto vacio. 
al finalizar la ejecucion de la funcion, retorna ese objeto que creo

new ctx es igual a
let a = {}
ctx.call(a)
return a

CLOSURE
espacio reservado que se genero en una funcion definida dentro de otra funcion

function Persona(){
    // atributo privado de clase que le pertenece
    al closure de la funcion que la use
    let nombre = 'fede'

    // metodo publico de instancia que guarda como referencia
    el atributo 'privado' del closure

    this.getnombre = function(){
        console.log(nombre)
    }
}

*/

let a = {}
a.toString()