const router = require('express').Router();

const authCheck = (req, res, next)=> {
    // ofcourse this middleware executes befor the next middlware
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
}
router.get('/', authCheck, (req, res)=>{
    res.render('profile',{})
});

module.exports = router