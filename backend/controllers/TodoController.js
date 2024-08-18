

// @Request   GET
// @Route     /api/todoapp/

const getTodo = async(req,res)=>{
    res.status(200).json({message:"get todo"})
}

// @Request   POST
// @Route     /api/todoapp/

const createTodo = async(req,res)=>{
    res.status(200).json({message:"create todo"})
}

// @Request   PUT
// @Route     /api/todoapp/:id

const updateTodo = async(req,res)=>{
    res.status(200).json({message:`Update todo # ${req.params.id}`})
}

// @Request   DELETE
// @Route     /api/todoapp/:id

const deleteTodo = async(req,res)=>{
    res.status(200).json({message:`Delete todo # ${req.params.id}`})
}



module.exports = {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
};
