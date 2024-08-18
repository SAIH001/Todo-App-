const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.status(200).json({message:"get todo"})
})

router.post('/',(req,res)=>{
    res.status(200).json({message:"create todo"})
})

router.put('/:id',(req,res)=>{
    res.status(200).json({message:`Update todo # ${req.params.id}`})
})

router.delete('/:id',(req,res)=>{
    res.status(200).json({message:`Delete todo # ${req.params.id}`})
})


module.exports = router;