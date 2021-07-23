const newsRouter = require('./news');
const siteRouter = require('./site');
const postRouter = require('./posts');

function route(app){
    app.use('/news',newsRouter) 
    app.use('/post',postRouter) 
    app.use('/', siteRouter)

}
module.exports = route