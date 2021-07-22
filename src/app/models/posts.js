const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    thumb: { type: String },
    title: { type: String, min:200},
    content: { type: String,min: 200 },
    arthor: { type: String},
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Post',Post )