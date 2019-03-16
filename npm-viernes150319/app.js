const mysql = require("mysql");
const http = require("http");
const io = require("socket.io");
const fs = require("fs");
const template = require("./template.js");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  database: "chatapi"
});

/**
 * * CREAR USUARIOS EN MYSQL
 * CREATE USER  'fede'@localhost IDENTIFIED BY '123456';
 *
 */

//  desde la variable que mantiene la conexion sale siempre un metodo
// llamado query que es la que permite ejecutar asincronicamente
// cada consulta a la bd

// CONSULTA COMUN - connection.query("SELECT * FROM usuarios", (err, data) => {});
// CONSULTA CON PARAMETROS - connection.query('SELECT * FROM usuarios WHERE id = ?', [1], callback)
// connection.close() para cerrar la conexion

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end(template);

  //   let { url } = req;

  //   if (url === "socket.client.js") {
  //     let script = fs.createReadStream(__dirname + "/socket.client.js");
  //     res.writeHead(200, { "content-type": "application/javascript" });
  //     script.pipe(res);
  //   } else {
  //     res.end("hello friend");
  //   }
});

/**
 * * SOCKET IO
 * io = todos los sockets conectados al servidor
 * socket = representa el cliente que se conecto al servidor
 *
 */

io.on("connection", socket => {
  // EMIT(evento string, data any object)
  io.emit("enviar mensaje", { msg: "se ha conectado un nuevo usuario" });
  // socket.emit("");
  socket.on("recibir mensaje", data => {
    // guardar data en la BD
    // se lo emito a todos los sockets
  });
});

server.listen(8000, () => console.log("Servidor iniciado en el puerto 8000"));
