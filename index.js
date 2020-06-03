//Se importan los paquetes
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//definimos el motor de plantillas
app.set('view engine', 'hbs');

//Vamo a generar los partials
hbs.registerPartials(__dirname + '/views/partials/');

//Se generó el sitio estático
app.use(express.static(__dirname + '/public'));

//Mis rutas
app.get('/', (req, res)=>{
 res.render('index');
});

app.get('/felguerez', (req, res)=>{
 res.render('Manuel-Felguerez', {
 autor:'Marina Santa Anna Gaytán - 4°E',
 year: new Date().getFullYear(),
 title:'Manuel Felguerez'
 });
});

app.get('/afremov', (req, res)=>{
 res.render('Leonid-Afremov', {
 autor:'Marina Santa Anna Gaytán - 4°E',
 year: new Date().getFullYear(),
 title:'Leonid Afremov'
 });
});

app.get('/gerome', (req, res)=>{
 res.render('Jean-Leon-Gerome', {
 autor:'Marina Santa Anna Gaytán - 4°E',
 year: new Date().getFullYear(),
 title:'Jean Leon Gerome'
 });
});

app.get('/bazan', (req, res)=>{
 res.render('Carlos-Bazan', {
 autor:'Marina Santa Anna Gaytán - 4°E',
 year: new Date().getFullYear(),
 title:'Carlos Bazan'
 });
});

app.get('/sobremi', (req, res)=>{
 res.render('sobremi');
});


//arrancar el servidor web
app.listen(6254,()=>{
 console.log("Escuchando el puerto 6254");
});