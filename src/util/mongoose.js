module.exports={
    mongooseToObject: function(mongooses){
        return mongooses.map( mongoose => mongoose.toObject())
    },
    mongooseToOb: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}