
const express = require('express');
const app=express();

app.use(express.urlencoded({extended:true}));

const adminRoutes=require('./routes/admin');
app.use(adminRoutes);

app.listen(3000);