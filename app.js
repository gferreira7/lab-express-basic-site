const express = require('express')
const hbs = require('hbs');
const port = 3000
const path = require('path');

const app = express()
app.use(express.static('public'))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (request, response, next) => {
  response.render('home')
})

app.get('/about', (request, response, next) => {
  response.render('about')
})

app.get('/works', (request, response, next) => {
  response.render('works')
})

app.listen(port, () => console.log(`Running on port ${port}`))
