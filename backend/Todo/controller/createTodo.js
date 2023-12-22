const Todo = require("../model/Todo.js");

exports.createTodo = async (req, res) => {
  try {
    //    extract data from req body
    const { title, description } = req.body;

    // creta response and entry into db
    const response = await Todo.create({ title, description });

    //    send response

    res.status(200).json({
      success: true,
      data: response,
      message: "Entry successful",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data:"internal server error",
      message: error.message ,
    });
  }
};
