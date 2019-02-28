/**
 * 1) Iniciar un repositorio en GITHUB llamado fizzmod
 * 2) Agregarlo como remoto de origen a un repositorio local.
 * En este repositorio se iran subiendo las respuestas de los siguientes ejercicios
 * 3) Crear una función que reemplace de manera provisoria la funcionalidad obtenia
 * por el método map() del prototipo de Array que pueda pasar los siguientes tests :
 */

let numeros = [1, 2, 3, 4];

// RESPUESTA PUNTO 3
console.log("--- Respuesta punto 3 ---");
function mapCustomizado(array, funcion) {
  let resultado = [];
  let callback = funcion;
  for (let indice = 0; indice < array.length; indice++) {
    resultado.push(callback(array[indice], indice, array));
  }

  return resultado;
}

//mapCustomizado => representa la funcion que ustedes tendrían que crear
console.log(mapCustomizado(numeros, numero => numero + 1)); //[2,3,4,5]
console.log(mapCustomizado(numeros, (numero, indice) => numero + indice)); //[1,3,5,7]
console.log(mapCustomizado(numeros, numero => {})); //[undefined,undefined,undefined,undefined]

/**
 * 4) Modificar el prototipo de la funcion constructora Array para que admita como nuevo método la funcion
 * customizada del paso anterior para que cumpla los siguientes tests :
 */

//  RESPUESTA PUNTO 4
console.log("--- Respuesta punto 4 ---");

Array.prototype.mapCustomizado = function(funcion) {
  let resultado = [];
  let callback = funcion;
  for (let indice = 0; indice < this.length; indice++) {
    resultado.push(callback(this[indice], indice, this));
  }

  return resultado;
};

console.log(numeros.mapCustomizado(numero => numero + 1)); //[2,3,4,5]
console.log(numeros.mapCustomizado((numero, indice) => numero + indice)); //[1,3,5,7]
console.log(numeros.mapCustomizado(numero => {})); //[undefined,undefined,undefined,undefined]
console.log(numeros.hasOwnProperty("mapCustomizado")); //false
console.log("mapCustomizado" in numeros); //true

/**
 * 5) Los miembros de trabajo especificados en el siguiente objeto usan su nombre como indice
 * y su edad como valor. Separa los miembros mayores de 40 años y menores de 25 años en un array
 * y todo el resto en un segundo array. Ambos arrays tienen que estar compuestos únicamente
 * por los nombres de las personas. Por último cada array tiene que estar ordenado alfabeticamente.
 */
console.log("--- Respuesta punto 5 ---");

let miembros = {
  pedro: 35,
  ana: 18,
  carlos: 43,
  juan: 21,
  maria: 29,
  angela: 31,
  jose: 23,
  mariana: 41,
  eugenio: 19
};

let mayores40menores25 = [];
let entre26y39 = [];

for (let persona in miembros) {
  if (miembros[persona] > 40 || miembros[persona] < 25) {
    mayores40menores25.push(persona);
  } else {
    entre26y39.push(persona);
  }
}

mayores40menores25.sort();
entre26y39.sort();

console.log(`mayores de 40 y menores de 25 => ${mayores40menores25}`);
console.log(`entre 26 y 39 años => ${entre26y39}`);

/**
 * 4) Crear un fork de este repositorio en sus propias cuentas
 * 5) Clonar el fork obtenido
 * 6) Encontrar todos los errores en el siguiente programa , corregirlo
 * y elevarlo como Push Request al repositorio de origen :
 */
console.log("--- Respuesta punto 6 ---");

(function() {
  "use strict";

  let x = 1;
  let arr = [];
  let y = 2;
  arr.push(x, y);
  // SOLUCION 1
  let res = arr.map(n => n + 1);

  // SOLUCION 2
  // let res = [];
  // arr.forEach( (n, indice) => {
  //   console.log(`El numero en el indice ${indice} es : ${n}`);
  //   res.push(n + 1);
  // });

  console.log(res); // [2,3]
})();

/*
 * 7) Crear un modulo .js que contenga una variable llamada base
 * cuyo valor es el número 2 y tres funciones, las cual va a exportar
 * cada vez que se requiera el archivo llamadas multiplicar ,
 * cambiarBase y consultarBase. La función multiplicar toma un valor
 * como input de tipo Number o String y lo multiplica por el valor
 * de la variable base. La función cambiarBase modifica el valor
 * de la variable base el cual se mantiene para las próximas ejecuciones
 * y consultarBase retorna el valor actual de la variable base
 */
module.exports.modulo = {
  base: 2,
  multiplicar: function(number) {
    let n = parseInt(number);
    return n * base;
  },
  cambiarBase: function(number) {
    let n = parseInt(number);
    this.base = n;
  },
  consultarBase: function() {
    return this.base;
  }
};

// consumir desde otro js de la siguiente manera
// const obj = require("./index").modulo;
