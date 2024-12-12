const mongoose = require("mongoose");

const schema = mongoose.Schema({
    Book_name: { 
        type: String, 
        required: true 
    },
    Auther_name: { 
        type: String, 
        required: true 
    },
    Price: { 
        type: Intl, 
        required: true 
    },
    Publish_data: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
});

const admin = mongoose.model("Student",schema);
module.exports = admin;