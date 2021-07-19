const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');

const app = express()
const port = 3000

app.use(morgan('combined'))

app.engine('hds', handlebars({
  extname:'.hds'
}));
app.set('view engine', 'hds');
app.set('views', path.join(__dirname, 'resources', 'views'))
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})