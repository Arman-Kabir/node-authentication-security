const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send(' u r logged in , this is your profile' + req.user.username);
});

module.exports = router;