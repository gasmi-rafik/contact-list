const mongoose = require("mongoose")
const config = require('config')

const connectDB = ()=>{
    mongoose.connect(config.get("MONGOURI") ,{ useNewUrlParser: true , useUnifiedTopology: true})
    .then(()=> console.log("mongoose connected"))
    .catch('error connection to database')
}

module.exports= connectDB