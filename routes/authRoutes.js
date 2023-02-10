const passport = require('passport');

const router = require('express').Router();

router.get('/login', (req, res)=>{
    res.render('login')
});

//auth logout
router.get('/logout', (req, res)=>{
    // handle with passport
    req.logOut();
    res.redirect('/');
});

//auth with google
router.get('/google', passport.authenticate("google",{
    scope: ['profile']
}));

router.get('/google/redirect', (req, res)=> {
    // this is the url that we give to the google to redirect the user to this route
    // 
    res.send(req.user)
    res.redirect('/profile/')
    res.send('you reached the callback')
})


module.exports = router