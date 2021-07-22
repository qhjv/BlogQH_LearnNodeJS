const Post = require('../models/posts')
const { mongooseToObject } = require('../../util/mongoose')

class SiteController {


    //[GET]/home
    index(req,res,next){

        //Cách 1

        // Post.find({}, function(err,posts){
        //     // if(!err) {
        //     //     res.json(posts);
        //     // }else{
        //     //     next(err)
        //     // }
        // })

        //cách 2

        Post.find({})
        .then(posts => {
            res.render('home',{ 
                posts : mongooseToObject(posts)
            })
        })
        .catch(next)
        
        // res.render('home');
    }

}
module.exports= new SiteController