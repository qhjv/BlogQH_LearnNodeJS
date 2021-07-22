const path = require('path')
const express = require('express')
const morgan = require('morgan')
const route = require('./routes')
const handlebars = require('express-handlebars');
const db = require('./config/db')

const app = express()
const port = 8080

// Template engine
app.engine(
  'hbs',
  handlebars({
      extname: '.hbs',
      helpers: {
          sum: (a, b) => a + b,
      },
  }),
);
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'public')))


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))


//route
route(app)

//connect
db.connect()

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})










