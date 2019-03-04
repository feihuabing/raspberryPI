const express = require('express');
const led = require('./led.js')
const app = express();
app.get('/temp',(req,res)=>{
    res.send('10')
})
app.get('/hum',(req,res)=>{
    res.send('48')
})
app.get('/on',function (req,res){
    led.on();
})
app.get('/off',function (req,res){
    led.off();
})
app.listen(3000,()=>{
    console.log('server listening on port 3000');
})

