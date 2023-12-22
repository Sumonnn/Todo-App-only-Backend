//import the model
const Todo = require('../models/Todo');

//define route Handler
exports.getTodo = async (req, res) => {
    try {
        //fetch all Todo items from database
        const todos = await Todo.find({});

        //response 
        res.status(200).json({
            success: true,
            data: todos,
            message: 'Entire Todo Data is fetched',
        })
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error",
        })
    }
}