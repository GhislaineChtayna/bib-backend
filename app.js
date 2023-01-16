const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json());

const musiquesRoutes = require('./routes/musiques-routes')
app.use('/api/musiques', musiquesRoutes);

const filmsRoutes = require('./routes/films-routes')
app.use('/api/films', filmsRoutes);

app.listen(5000);