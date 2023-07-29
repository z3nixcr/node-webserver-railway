
require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estático
app.use(express.static('public'))

// El codigo arriba sobreescribe el de abajo
// app.get('/', (req, res) => {
//   res.send('Home Page')
// })

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Zenovio Ndong',
    titulo: 'Aprendiendo Node'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Zenovio Ndong',
    titulo: 'Generic Page'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Zenovio Ndong',
    titulo: 'Elements Page'
  })
})

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html')
// })

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})