/**
 * Express : Framework de Node.js para generar rutas 
 * CORS : Cross Oiring Resource Sharing - Es una politica de seguridad de internet 
 * 
 * - Los pedidos externos son solo por GET - POST - HEADERS
 * - Las respuestas tienen que venir con el header Access-Control-Allow-Origin
 * 
 * 
 * Middleware : Es una funcion que se ejecuta antes que su destino 
 * 
 */

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",(req,res,next)=>{
    console.log(req.params)
    console.log("Parametros JSON en el body por POST:",req.body)
    console.log("Parametros string en la URL por GET:",req.query)

    res.write("Hola")
    next()
})

app.get("/",(req,res)=>{
    res.end(" Mundo")
})

app.post("/",(req,res)=>{
    res.end(" Mundo")
})

/*
app.put
app.patch
app.delete
app.options
*/

app.listen(8000,()=>{
    console.log("Servidor Web Levantado")
})


/*
 GET => da el recurso
 POST => crea un nuevo recurso
 PUT => reemplaza un recurso
 PATCH => edita un recurso
 DELETE => borra un recurso
*/