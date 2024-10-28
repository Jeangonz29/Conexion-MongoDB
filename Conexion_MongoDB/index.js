const express = require('express');
const app = express(); //aqui creo una instancia en app
const mongoose = require('mongoose');
require('dotenv').config(); //dotenv es directo
const port = process.env.PORT ||3000; //aqui defino los puertos, 
app.listen(port, ()=> console.log('server listen on port', port)) //

//www.midominio.com
//www.123.123.345.com:8888 todo esto esta definido con un puerto

//GET, POST, DELETE, UPDATE
//GET: obtener datos
//POST: crear datos
//DELETE: eliminar datos
//UPDATE: actualizar datos
//CRUD = CREATE, READ, UPDATE, DELETE

app.get('/',(req,res)=>{ //'/' ES UN ALIAS, ES UNA RUTA DE RAIZ
    res.send('Bienvenido al servidor')

})

//conexion a mongodb
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log('te has conectado a mongodb'))
.catch((error)=>console.error(error))
 //Aprenderme todocd