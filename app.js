const express = require('express');
const app = express();

//Ruta de archivos estáticos//
app.use('/', express.static(__dirname + '/public'));

//Método listen//
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando en http://localhost:3000');
});

//Envío a la ruta raíz del archivo html//
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});