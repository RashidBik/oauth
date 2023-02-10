const express = require('express');
const authRouter = require('./routes/authRoutes')
const mongoose = require('mongoose');
const app = express();


app.set('view engine', 'ejs');

mongoose.connect('mlab') // use mlab for online dbs

app.use('/auth', authRouter);

app.get('/', (req, res)=> {
    res.render('home')
})

app.listen(3000, ()=>{
    console.log('listens on port 3000');
})