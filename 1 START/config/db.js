const mongoose = requre("mongoose");
mongoose.connect("mongodb://127.0.0.1/CRUD");

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log(err) : console.log(Succesfully);
    
});

MediaSourceHandle.exports = db;