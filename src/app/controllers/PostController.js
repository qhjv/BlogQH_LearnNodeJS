const Post = require('../models/posts')
const { mongooseToOb, mongooseToObject } = require('../../util/mongoose')

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
        .then(()=>res.redirect('/post/admin/show'))
        .catch(error=>{})
    }
    showPost(req, res,next) {
        Post.find({})
        .then(post => res.render('admin/show',{
            post: mongooseToObject(post)
        }))
        .catch(next)
    }
    edit(req, res,next) {
        Post.findById(req.params.id)
        .then((post)=>{
            res.render('admin/edit',{post:mongooseToOb(post)})
        }).catch(next)
    }
    //[PUT] post/admin/:id
    update(req, res,next) {
        Post.updateOne({_id : req.params.id}, req.body)
            .then(() => res.redirect('/post/admin/show'))
            .catch(next)
    }
    delete(req, res,next) {
        Post.delete({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    realDelete(req, res,next) {
        Post.deleteOne({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    trash(req, res,next) {
        Post.findDeleted({})
        .then(post => res.render('admin/trash',{
            post: mongooseToObject(post)
        }))
        .catch(next)
    }
    restore(req, res,next) {
        Post.restore({_id : req.params.id})
            .then(() => res.redirect('/post/admin/show'))
            .catch(next)
    }
}
module.exports= new PostController