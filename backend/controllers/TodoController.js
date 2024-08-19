const TodoModel = require("../models/Todo");


// @Request   GET
// @Route     /api/todoapp/
// @access    private

const getTodo = async(req,res)=>{
    
    res.status(200).json({message:"get todo"})
}

// @Request   POST
// @Route     /api/todoapp/
// @access    private

const createTodo = async(req,res)=>{
    try {
        // Access Todo from the request body
        const  {Todoo}  = req.body;
        
        // Check if Todo is provided
        if (!Todoo) {
            return res.status(400).json({ message: 'Todo is required' });
        }

        // Create Todo in Model 
        const newTodo = await  TodoModel.create({
            Todo:Todoo
        })
        // Respond with the Todo data
        res.status(200).json({ "message":newTodo });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: 'Server error', error });
    }
}

// @Request   PUT
// @Route     /api/todoapp/:id
// @access    private

const updateTodo = async(req,res)=>{
    
    // Get Id of Todo
    const id = req.params.id;

    // Find todo By Id
    const AvailableTodo = await Todo.



    res.status(200).json({message:`Update todo #  ${id}`})
}

// @Request   DELETE
// @Route     /api/todoapp/:id
// @access    private

const deleteTodo = async(req,res)=>{
    res.status(200).json({message:`Delete todo # ${req.params.id}`})
}



module.exports = {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
};
