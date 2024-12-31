const express = require("express")
const port = 1009;
const path = require("path");
// const cookies = require("cookie-parser");

const app = express();
const db = require("./config/db");
const passport = require('passport');
const session = require('express-session');

app.use(express.urlencoded());
app.set("view engine","ejs");

app.use(
    session({
        name: "local",
        secret: "local",
        resave: true,
        saveUninitialized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true},
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/",require("./routes/route"))
app.use("/public",express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at :- " + port);    
})