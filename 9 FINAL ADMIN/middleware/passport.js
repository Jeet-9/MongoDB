const passport = require('passport');
const LocalSt = require('passport-local');

let AdminSchema = require('../module/loguser');

passport.use(
    "local",
    new LocalSt({ usernameField: "email" }, async (email, password, done) => {
        let user = await AdminSchema.findOne({ email });
        if (user) {
            if (user.password === password) {
                done(null, user);
            } else {  
                done(null, false, { message: "Password is incorrect" });
            }
        } else {
            return done(null, false, { message: "User not found" });
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
    try {
        let user = await AdminSchema.findById(userId);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

passport.checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }else{
        res.redirect("/");
    }
};