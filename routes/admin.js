const express=require('express');
const Employee = require('../models/employees');
const router=express.Router();

router.use('/',(req,res,next)=>{
    console.log("root");
    next();
});

router.get('/customers',(req,res,next)=>{
    Employee.fetchAll()
    .then(([rows,fieldData])=>{
            res.json(rows);
    })
    .catch((err)=>{
        console.log(err);
    })
});

module.exports=router;