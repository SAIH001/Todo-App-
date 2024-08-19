
const mongoose = require("mongoose");

const Todo_Model = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userAccount',
        required: [true, 'User ID is required'] 
    },

    Todo:{
        type:String,
        required:[true,'Please add a Todo']
    },
    Status:{
        type:String,
        require:[true,'Please set a status ']
    }

},
{
    timestamps:true
}
);


module.exports = mongoose.model('Todo',Todo_Model);