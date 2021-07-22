const mongoose = require ('mongoose')

async function connect () {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog_QH', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("kết nôi thành công")
    } catch (error) {
        console.log("lỗi kết nôi",error)
    }
}

module.exports = { connect }