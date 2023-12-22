const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login',(req,res)=>{
    res.render('login');
});

// auth logout
router.get('/logout',(req,res)=>{
    // handle with passport
    // res.send('logging out');
    req.logout();
    res.redirect('/');
})

// auth with google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

// auth with facebook
router.get('/facebook',passport.authenticate('facebook',{
    // console.log(profile);
    scope:['public_profile','email']
}));


// callback route for google to redirect to
router.get('/google/redirect',passport.authenticate('google'), (req,res)=>{
    // res.send('You reached the callback uri');
    res.send(req.user);
    // res.redirect('/profile/');
});

// callback route for facebook to redirect to
router.get('/facebook/redirect',passport.authenticate('facebook'), (req,res)=>{
    res.send('You reached the callback uri');
    // res.send(req.user);
    // res.redirect('/profile/');
});


module.exports = router;