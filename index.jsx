const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')
 
app.use(cors())

app.get('/',(req,res)=>{
    res.send('news api running')
})

app.get('/categories-api',(req,res)=>{
    res.send(categories)
})

app.listen(port,()=>{
    console.log('new api is created.....')
})