const express = require('express')
const app = express()
app.set('views','views');
app.set('view engine', 'ejs');
let mongoose = require('mongoose')
let option = {
    db:{native_paser:true},
    server:{poolSize:5},
    user:'lelouch',
    pass:'lelouch'
}
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/tutorial',option).then(
    ()=>{
        console.log("success")
    },
    err => {
        console.log('failed')
    }
)
app.get('/',(req,res)=>res.render('Home.ejs'))


app.listen(3000)


