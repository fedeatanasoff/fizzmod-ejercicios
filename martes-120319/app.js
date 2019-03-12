const http = require("http");
const Url = require("url");
const fs = require("fs");
let PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  const { httpVersion, method, url } = req;

  console.log(`HTTP: ${httpVersion} - ${method} - ${url}`);
  /**
   * * EXPRESS = es un framework para crear servidores en node
   * Body-parser = parsea la data entrante desde el cliente
   */
  // res.write("Hello friend");

  let parsed_url = Url.parse(url, true);
  let { nombre } = parsed_url.query;
  console.log(nombre);

  let buffer = [];
  let buffer_end;

  req.on("data", chunk => {
    buffer.push(chunk);
  });

  req.on("end", () => {
    buffer_end = Buffer.concat(buffer);
    buffer = [];
    console.log(buffer_end.toString());
  });

  let archivo = fs.createReadStream(__dirname + "/index.html");
  res.writeHead(200, { "content-type": "text/html" });
  archivo.pipe(res);

  res.end();
});

/**
 * fetch + header + body+stringify = OK
 * fetch + body: [object object]
 * fetch + body+stringify: pseudook
 */

// fetch("http://localhost:8000", {
//   method: "POST",
//   headers: {
//     "content-type": "application/json"
//   },
//   body: JSON.stringify({ x: 1 })
// })

server.listen(PORT, () => console.log(`Iniciando servidor en puerto ${PORT}`));
