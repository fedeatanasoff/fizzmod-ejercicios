const http = require("http");
const fs = require("fs");

const servidor = http.createServer((req, res) => {
  // es indispensable que una conexion http termine en la escritura del socken con sockend.end
  /**
  ** content-type: determina que tipo de recurso esta impactando en el
  ** cliente en este momento
  
   * * servidor - cliente
   * text/html
   * text/plain
   * application/json
   * application/javascript
   * image/jpeg
   * image/png
   * image/gif
   * video/mp4
   * video/ogg
   *
   * * Cliente - Servidor
   * multipart/formdata
   * application/x-www-url-encoded
   *
   */
  // por defecto el codigo de status de HTTP en node siempre es 200
  // hasta que le digamos lo contrario
  //   res.statusCode = 200;
  //   res.setHeader("Content-type", "text/plain");
  //   res.writeHead(200, "OK", { "content-type": "text/html" });
  //   res.write("hello friend");
  //   res.end();

  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) {
      console.log("Error: ", err);
      res.writeHead(500, "Internal Server Error");
      res.end(err.message);
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    }
  });
});

servidor.listen(8000, () => {
  console.log("servidor iniciado en el puerto 8000");
});

/**
 *
 *
 *
 */
