// async -await
let url = 'https://jsonplaceholder.typicode.com/'

async function obtenerComentarios(){

  let usuarios = await fetch(`${url}users`)
  let usersJson = await usuarios.json()
  console.log(usersJson)
}

obtenerComentarios()
