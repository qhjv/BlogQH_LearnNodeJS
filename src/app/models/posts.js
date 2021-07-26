const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoose_delete = require('mongoose-delete');

const Post = new Schema({
    thumb: { type: String },
    title: { type: String, min:200},
    content1: { type: String,min: 200 },
    content2: { type: String,min: 200 },
    author: { type: String},

},{
    timestamps:true
});

Post.plugin(mongoose_delete,{
  deletedAt:true,
  overrideMethods: 'all' 
});

module.exports = mongoose.model('Post',Post )