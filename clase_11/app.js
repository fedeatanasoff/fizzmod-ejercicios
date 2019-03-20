/**
 * * EXPRESS : framework de node.js para generar rutas
 * * CORS : cross origins resource sharing -  es una politica de seguridad de internet
 * * - los pedidos externos son solo por GET POST HEADERS
 * * - las respuestas tienen que venir con el header Access-Control-Allow-Origin
 * * - middleware: es una funcion que se ejecuta antes de su destino
 */

const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cada vez que hacen una solicitud hace esta funcion - middleware
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log(`peticion POST via JSON : ${req.body}`);
  next();
});

app.get("/", (req, res) => {
  res.send({ message: "hello friend" });
});

app.get("/chat", (req, res) => {
  res.send({ message: "chat" });
});

app.listen(2000, () => {
  console.log("iniciando servidor en el puerto 2000");
});
