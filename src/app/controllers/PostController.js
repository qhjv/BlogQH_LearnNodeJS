const Post = require('../models/posts')
const { mongooseToOb } = require('../../util/mongoose')

class PostController {

    show(req, res,next) {
        
        Post.findById(req.params.id)
        .then((post)=>{
            res.render('posts/post',{post:mongooseToOb(post)})
        }).catch(next)
        
    }
    create(req, res,next) {
        
        res.render('admin/create')
    }
    store(req, res,next) {
        const post = new Post(req.body);
        post.save()
        .then(()=>res.redirect('/'))
        .catch(error=>{})
    }
}
module.exports= new PostController