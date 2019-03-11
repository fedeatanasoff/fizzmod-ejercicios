const net = require("net");

const servidor = net.createServer(socket => {
  //    * identificar propiedades para capturar la direccion ip y el puerto del socket
  let { localAddress, localPort, remoteAddress, remotePort } = socket;

  //   * establecer un nombre aleatorio para cada socket conectado al servidor
  // Math.floor => redondea para abajo
  // Math.ceil => redondea para arriba
  // Math.toFixed => por parametro pasar la cantidad de decimales || convierte el numero a un string
  socket.id = `Socket - ${Math.floor(Math.random() * 1000)}`;
  let sockets = [];
  // guardar cada coket en un array de sockets
  sockets.push(socket);

  //  * mostrar un mensaje para todos los sockets cada vez que alguien se conecte
  if (sockets.length) {
    sockets.forEach(s => {
      s.write("se ha conectado alguien");
    });
  }

  let buffer = [];

  socket.on("data", data => {
    buffer.push(data);
    if (data === "enter") {
      buffer = Buffer.concat(buffer);
      /*
       * acordarse de usar la linea 28 en otra variable o rastaurar
       * el valor original de la variable buffer en array vacio, de lo contrario
       * el proximo ingreso de data falla ya que la variable no es mas un array sino un buffer
       */
    }
  });
});

servidor.listen(8000, () =>
  console.log("iniciando el servidor en el puerto 8000")
);

/*
TODO identificar el evento de desconexion del socket 
TODO y enviar un mensaje a todos los sockets notificando la desconeccion
***********************
TODO eliminar el socket del array de sockets a notificar de lo contrario
TODO nos dara error en los proximos mensajes
***********************
TODO crear una funcion broadcast que envie el mensaje recibido por el evento
TODO data a todos los sockets menos al que lo envia
*/
