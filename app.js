const express = require('express');
const authRouter = require('./routes/authRoutes')
const profRouter = require('./routes/profile_route');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const app = express();


app.set('view engine', 'ejs');
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: ['mykookiekey']
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mlab') // use mlab for online dbs

app.use('/auth', authRouter);
app.use('/profile', profRouter);

app.get('/', (req, res)=> {
    res.render('home')
})

app.listen(3000, ()=>{
    console.log('listens on port 3000');
})