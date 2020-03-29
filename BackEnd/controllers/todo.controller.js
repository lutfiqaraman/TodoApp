// Create a to do task
const db = require("../db/dbConfig");

exports.createTodo = async (req, res) => {
	const data = req.body;
  try {
		const sql = `
			INSERT INTO todo(todo_desc, is_completed) 
			VALUES
			('${data.todo_desc}', ${data.is_completed})`;
		
		db.dbConnection.query(sql);
		res.status(201).send(data);
  } catch (error) {
    if (error) throw error;
  }
};

// Get all to-do tasks
exports.getAlltodos = () => {};

// Get a to-do task
exports.getTodo = () => {};

// Update a to-do task
exports.updateTodo = () => {};

// Delete a to-do task
exports.deleteTodo = () => {};
