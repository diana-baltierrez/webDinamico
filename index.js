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

app.get('/da', (req, res)=>{
    res.render('da', {
        autor:'Diana Yamileth Baltierrez 4°P',
        year: new Date().getFullYear(),
        title:'Leonardo Da Vinci'
    });
});

app.get('/diego', (req, res)=>{
    res.render('diego', {
        autor:'Diana Yamileth Baltierrez 4°P',
        year: new Date().getFullYear(),
        title:'Diego Velazquez'
    });
});

app.get('/picasso', (req, res)=>{
    res.render('picasso', {
        autor:'Diana Yamileth Baltierrez 4°P',
        year: new Date().getFullYear(),
        title:'Pablo Picasso'
    });
});

app.get('/van', (req, res)=>{
    res.render('van', {
        autor:'Diana Yamileth Baltierrez 4°P',
        year: new Date().getFullYear(),
        title:'Van Gogh '
    });
});

app.get('sobremi', (req, res)=>{
    res.render('sobremi');
});


//arrancar el servidor web
app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000");
});
