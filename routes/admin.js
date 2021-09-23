const express=require('express');
const path=require('path');
const Employee = require('../models/employees');
const router=express.Router();

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