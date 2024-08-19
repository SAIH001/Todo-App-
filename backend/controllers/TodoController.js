const TodoModel = require("../models/Todo");


// @Request   GET
// @Route     /api/todoapp/
// @access    private

const getTodo = async(req,res)=>{
    const Todos = await TodoModel.find();
    res.status(200).json({Todos:Todos})
}

// @Request   POST
// @Route     /api/todoapp/
// @access    private

const createTodo = async(req,res)=>{
    try {
        // Access Todo from the request body
         const  {Todo,Status,userId}  = req.body;
 
        // Check if Todo is provided
        if (!Todo) {
            return res.status(400).json({ error: 'Todo is required' });
        }

        // Create Todo in Model 
        const newTodo = await  TodoModel.create({
            userId:userId,
            Todo:Todo,
            Status:Status

        })
        // Respond with the Todo data
        res.status(200).json({ success:'Todo created Successfull' });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: 'Server error', error });
    }
}

// @Request   PUT
// @Route     /api/todoapp/:id
// @access    private

const updateTodo = async(req,res)=>{
    

    const {UpdateTodo,UpdateStatus,userId} = req.body;

    // Get Id of Todo
    const id = req.params.id;

    // Finding any Null Values

    if(!UpdateTodo){
        return res.status(400).json({ error: 'Todo is required to update' });
    }
   
    if(!UpdateStatus){
        return res.status(400).json({ error: 'Todo Status is required to update' });
    }

    // Making Update Data Object to Update
    const updateData = {
        userId:userId,
        Todo:UpdateTodo,
        Status:UpdateStatus
    }

    // Find todo By Id and Update
    const AvailableTodo = await TodoModel.findByIdAndUpdate(id, updateData, { new: true });



    res.status(200).json({success: "Todo is updated SuccessFully"})
}

// @Request   DELETE
// @Route     /api/todoapp/:id
// @access    private

const deleteTodo = async(req,res)=>{
    
    // Get Id From Params
    const id = req.params.id;

    // Find and Delete Todo by Id
    const deletedTodo = await TodoModel.findByIdAndDelete(id);

    res.status(200).json({success:`Todo Deleted Successfully`})
}



module.exports = {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
};
