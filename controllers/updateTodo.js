//import the model
const Todo = require('../models/Todo');

//define route Handler
exports.updateTodo = async (req, res) => {
    try {
        //extract todo items basis on id
        const id = req.params.id;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate({ _id: id }, {
            title,
            description,
            updatedAt: Date.now(),
        })

        //data updated successfully for given id   
        res.status(200).json({
            success: true,
            data: todo,
            message: `Updated succesfully!`,
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