const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    thumb: { type: String },
    title: { type: String, min:200},
    content1: { type: String,min: 200 },
    content2: { type: String,min: 200 },
    author: { type: String},

  },{
    timestamps:true
  });

  module.exports = mongoose.model('Post',Post )