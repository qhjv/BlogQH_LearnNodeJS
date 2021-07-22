const newsRouter = require('./news');
const siteRouter = require('./site');
const searchRouter = require('./search');

function route(app){
    app.use('/news',newsRouter) 
    app.use('/search',searchRouter) 
    app.use('/', siteRouter)

}
module.exports = route