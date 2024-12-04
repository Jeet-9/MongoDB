const mongoose = require("mongoose");

const schema = mongoose.schema({
    name : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
})

const admin = mongoose.model("student",schema);
module.exports = admin;