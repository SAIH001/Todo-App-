const bcrypt = require('bcryptjs');
const userAccount_Model =  require('../models/userAccount');

// @Request   GET
// @Route     /api/userAccount/
// @access    private
const getUserAccount = async(req,res)=>{
    const userAccounts = await userAccount_Model.find();

    res.status(200).json(userAccounts)
}

// @Request   POST
// @Route     /api/userAccount/
// @access    private

const createUserAccount = async(req,res)=>{
    const {userName,userEmail,userPassword} = req.body;

    // checking user already created or not 
    const userAvailabilty = await userAccount_Model.findOne({userEmail})


    if(userAvailabilty){
        return res.status(400).json({ error: 'Email is already taken ' });
    }
    

    if(!userName){
        return res.status(400).json({ error: 'user name is required' });
    }
    
    if(!userEmail){
        return res.status(400).json({ error: 'user email is required' });
    }
    
    if(!userPassword){
        return res.status(400).json({ error: 'user password is required' });
    }

    // Password Hashing
    const genSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(userPassword,genSalt);

    // Data insertion in Model
    const newUser  = await userAccount_Model.create({
        userName:userName,
        userEmail:userEmail,
        userPassword:hashPassword,
        userRole:'customer'
    })


    res.status(200).json({success:"Account Created Successfully !!"})
}

// @Request   PUT
// @Route     /api/userAccount/:id
// @access    private

const updateUserAccount = async(req,res)=>{
    
    // record id
    const id = req.params.id;
    
    // updated data 
    const {userName,userEmail,userPassword} = req.body;
    

    if(!userName){
        return res.status(400).json({ error: 'user name is required' });
    }
    
    if(!userEmail){
        return res.status(400).json({ error: 'user email is required' });
    }
    
    if(!userPassword){
        return res.status(400).json({ error: 'user password is required' });
    }

    // Update Data Object
    const updateData = {
        userName:userName,
        userEmail:userEmail,
        userPassword:userPassword,
        userRole:'customer'
    }

    // Find todo By Id and Update
    const AvailableUser = await userAccount_Model.findByIdAndUpdate(id, updateData, { new: true });
    
    console.log(AvailableUser)

    res.status(200).json({success:'Account Updated Successfull'})
}

// @Request   DELETE
// @Route     /api/userAccount/:id
// @access    private

const deleteUserAccount = async(req,res)=>{

    const id = req.params.id;

    const DeleteUser = await userAccount_Model.findByIdAndDelete(id) 

    if(!DeleteUser){
        res.status(400).json({error:`account not deleted`})

    }

    res.status(200).json({success:'account deleted successfully'})
}



module.exports = {
    getUserAccount,
    createUserAccount,
    updateUserAccount,
    deleteUserAccount,
};
