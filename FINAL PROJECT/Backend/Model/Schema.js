const mongoose = require("mongoose")

let UserSchemamern = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },  
    location: {
        type: String,
    },
    occupation: {
        type: String,
    },
    phoneNumber: {
        type: String,   
    }
})

let schema = mongoose.model("mern1",UserSchemamern)
module.exports = schema