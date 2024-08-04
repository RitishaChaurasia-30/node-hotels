const express=require('express');
const router=express.Router();
const MenuItem = require('./../models/MenuItem');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Internal server Error" });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data Fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Internal server Error" });
    }
});

router.get('/:taste', async(req,res)=>{
    try{
        const tasteType=req.params.workType;
        if(tasteType=='sweet' || tasteType=='spicy'||tasteType=='spicy'){
                const response=await Person.find({taste:tasteType});
                console.log('response fetched');
                res.status(200).json(response);
        }else{
            res.status(404).json({error:'Invalid'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({ err: "Internal server Error" });
    }
});
module.exports=router;