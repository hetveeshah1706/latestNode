var express=require('express');
var router=express.Router();
var order_Notassigned_router=require('../model/order_delivery_model');
router.get('/',function(req,res,next){
    order_Notassigned_router.getAllOrderNotAssigned(function(err,rows){
        if(err){
            res.json(err); 
        }
        else{
            res.json(rows);
        }
    })
}),
router.post('/',function(req,res,next){
    console.log("in");
    order_Notassigned_router.AddOrderAssigned(req.body,function(err,rows){                   //Insert

        if(err)
        {
            res.json(err);
        }
        if(rows)
        {
            res.json(rows);    
        }
    });        
});
module.exports=router;