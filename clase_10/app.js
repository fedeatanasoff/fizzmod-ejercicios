const http = require('http')
const mysql = require('mysql')

const con = mysql.createConnection({
    host : "localhost",
    /* port : 3306 (default) */
    user : "root",
    password : "",
    database : "relaciones"
})

const server = http.createServer((req,res)=>{
    con.query("SELECT * FROM alumnos",(err,result,fields)=>{
        if (err) {
            res.writeHead(400,{"content-type":"text/plain"})
            res.end("Error")
        }

        console.table(fields)
        console.table(result)
    })
})

con.connect(err=>{
    if (err) {
        console.error(err)
    }
    console.log("Se conecto la DB")
    server.listen(8000,()=>{
        console.log("Se levanto el web server")
    })
})
