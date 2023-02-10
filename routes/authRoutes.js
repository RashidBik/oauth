const passport = require('passport');

const router = require('express').Router();

router.get('/login', (req, res)=>{
    res.render('login')
});

//auth logout
router.get('/logout', (req, res)=>{
    // handle with passport
    res.send('logging out')
});

//auth with google
router.get('/google', passport.authenticate("google",{
    scope: ['profile']
}));

router.get('/google/redirect', (req, res)=> {
    res.send('you reached the callback')
})


module.exports = router