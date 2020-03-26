const router = require('express').Router();

router.get('/logs',(req,res)=>{
    res.send({
        status: 200,
        message :'all logs',
        data:[]

    });
});

module.exports=router;