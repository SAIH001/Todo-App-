

// @Request   GET
// @Route     /api/userAccount/

const getUserAccount = async(req,res)=>{
    res.status(200).json({message:"get userAccount"})
}

// @Request   POST
// @Route     /api/userAccount/

const createUserAccount = async(req,res)=>{
    res.status(200).json({message:"create userAccount"})
}

// @Request   PUT
// @Route     /api/userAccount/:id

const updateUserAccount = async(req,res)=>{
    res.status(200).json({message:`Update userAccount # ${req.params.id}`})
}

// @Request   DELETE
// @Route     /api/userAccount/:id

const deleteUserAccount = async(req,res)=>{
    res.status(200).json({message:`Delete userAccount # ${req.params.id}`})
}



module.exports = {
    getUserAccount,
    createUserAccount,
    updateUserAccount,
    deleteUserAccount,
};
