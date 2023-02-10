const router = require('express').Router();

const authCheck = (req, res, next)=> {
    // ofcourse this middleware executes befor the next middlware
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
}
router.get('/', (req, res)=>{
    res.send('You are logged in, this is the ', req.user);
});

module.exports = router