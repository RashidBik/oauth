const express = require('express');
const authRouter = require('./routes/authRoutes')
const app = express();

app.set('view engine', 'ejs');

app.use('/auth', authRouter);

app.get('/', (req, res)=> {
    res.render('home')
})

app.listen(3000, ()=>{
    console.log('listens on port 3000');
})