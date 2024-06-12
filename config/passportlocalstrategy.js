const passport = require('passport')

let passportlocal = require('passport-local').Strategy

let UserModel = require('../models/User')

passport.use(new passportlocal({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        let user = await UserModel.findOne({ email: email });
        if (!user || user.password != password) {
            console.log("Email and Password not valid");
            return done(null, false)
        }
        return done(null, user)
    } catch (error) {
        return done(null, false)
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        let user = await UserModel.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

passport.checkAuth = (req, res, next) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next()
    }
    return res.redirect('/')
}


module.exports = passport