const express = require('express') // importing express framework
const path = require('path') //importing path module
const app = express() // creating application


app.set('views', path.join(__dirname,'views')) //setting template directory

app.set('view engine','ejs')
app.use(express.static('public'));
app.use(express.static('images'));


const indexRouter = require('./routes')
app.use('/', indexRouter)

app.listen(3000) //3000 is port number