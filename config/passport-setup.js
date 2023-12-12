const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID:process.env.CLIENT_ID,
        clientSECRET:process.env.CLIENT_SECRET
    }),()=>{
        // passport callback function
    }
)