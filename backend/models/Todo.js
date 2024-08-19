
const mongoose = require("mongoose");

const Todo_Model = mongoose.Schema({

    Todo:{
        type:String,
        required:[true,'Please add a Todo']
    }

},
{
    timestamps:true
}
);


module.exports = mongoose.model('Todo',Todo_Model);