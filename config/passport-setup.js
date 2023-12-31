const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const User = require('../models/User-model');

passport.serializeUser((user, done) => {
    // console.log(user,user.id);
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                // console.log('user is', currentUser);
                done(null, currentUser);
            } else {
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    // console.log('new user created' + newUser);
                    done(null, newUser);
                });
            }
        })
    })
);

// facebook strategy
passport.use(new FacebookStrategy({
    clientID: keys.facebook.AppID,
    clientSecret: keys.facebook.AppSecret,
    callbackURL: "/auth/facebook/redirect"
},
    function (accessToken, refreshToken, profile, done) {
        // console.log(profile);
        User.findOne({ facebookId: profile.id }).then((currentUser) => {
            if (currentUser) {
                console.log('user is', currentUser);
                done(null, currentUser);
            } else {
                new User({
                    username: profile.displayName,
                    facebookId: profile.id
                }).save().then((newUser) => {
                    // console.log('new user created' + newUser);
                    done(null, newUser);
                });
            }
        })
    }
));