//import the model
const Todo = require('../models/Todo');

//define route Handler
exports.deleteTodo = async (req, res) => {
    try {
        //extract todo items basis on id
        const id = req.params.id;
        await Todo.findByIdAndDelete({ _id: id });
        res.json({
            success: true,
            message: "Todo DELETED",
        })
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server Error",
        })
    }
}