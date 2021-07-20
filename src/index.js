const path = require('path')
const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 8888

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'public')))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources', 'views'))
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})