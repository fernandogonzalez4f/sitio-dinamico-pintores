//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//Creamos la aplicación
const app = express();

//Definimos el motor de plantillas
//No de vamos a emplear MVC (Vista vamos a utilizar HBS)
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//Configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor: 'Fernando González Gallegos',
        year: new Date().getFullYear(),
        title: 'Inicio'
    });
});

app.get('/rembrandt', (req, res)=>{
    res.render('rembrandt_van_rijn', {
        autor: 'Fernando González Gallegos',
        year: new Date().getFullYear(),
        title: 'Rembrandt Van Rijn'
    });
});

app.get('/vincent', (req, res)=>{
    res.render('vincent_van_gogh', {
        autor: 'Fernando González Gallegos',
        year: new Date().getFullYear(),
        title: 'Vincent Van Gogh'
    });
});

app.get('/leonardo', (req, res)=>{
    res.render('leonardo_da_vinci', {
        autor: 'Fernando González Gallegos',
        year: new Date().getFullYear(),
        title: 'Leonardo Da Vinci'
    });
});

app.get('/paul', (req, res)=>{
    res.render('paul_cezanne', {
        autor: 'Fernando González Gallegos',
        year: new Date().getFullYear(),
        title: 'Paul Cézanne'
    });
});

app.get('/claude', (req, res)=>{
    res.render('claude_monet', {
        autor: 'Fernando González Gallegos',
        year: new Date().getFullYear(),
        title: 'Claude Monet'
    });
});

//Arrancamos el servidor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});