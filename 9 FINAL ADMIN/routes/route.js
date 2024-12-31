const express = require("express")
const route = express.Router();
const ctl = require("../controller/ctl");
const multer = require("../multer/murlter");
const passportSt = require("../middleware/passport");
const passport = require('passport');

route.get("/Dashboard", passport.checkAuth, ctl.HomePage);
route.get("/Sidebar", ctl.Sidebar);
route.get("/header", ctl.Header);
route.get("/addadmin", passport.checkAuth, ctl.Addadmin);
route.post("/send",multer,ctl.AddAdminData);
route.get("/viewadmin", passport.checkAuth, ctl.Viewadmin);
route.get("/delete",ctl.DeleteData);
route.get("/edit",ctl.EditData);
route.post("/update",multer,ctl.UpdateData);


//login//
route.get("/", ctl.Login);
route.get("/register", ctl.Register);
route.get("/forgot", ctl.Forgot);
route.post("/logadd",ctl.Logadd);
route.post("/loguser",passport.authenticate("local", {failureRedirect: "/"}),ctl.Loguser);
route.get("/logout",ctl.Logout);


module.exports = route