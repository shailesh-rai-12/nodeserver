
const express = require('express');
const app=express();
const path=require('path');

app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

const adminRoutes=require('./routes/admin');
app.use(adminRoutes);
app.use('/',(req,res,next)=>{

    res.sendFile(path.join(__dirname+'/public/page2.html'));
});

app.listen(3000);