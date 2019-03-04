const express = require('express');
const app = express();
app.get('/temp',(req,res)=>{
    res.send('10')
})
app.get('/hum',(req,res)=>{
    res.send(48)
})
app.listen(3000,()=>{
    console.log('server listening on port 3000');
})

