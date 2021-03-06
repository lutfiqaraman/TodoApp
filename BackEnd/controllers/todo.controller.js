// Create a to do task
const db = require("../db/dbConfig");

exports.createTodo = async (req, res) => {
  const data = req.body;
  
  try {
    const sql = 
		  `INSERT INTO todo(todo_desc, is_completed) 
		  VALUES 
		  ('${data.todo_desc}', ${data.is_completed})`;
		
    db.dbConnection.query(sql);
    res.status(201).send(data);
  } catch (error) {
    if (error) throw error;
  }
};

// Get all to-do tasks
exports.getAlltodos = async(req, res) => {
  try {
    const sql = "SELECT * FROM todo";
  
    db.dbConnection.query(sql, (err, result, fields) => {
      if (err) throw res.status(400).send(err.message);
      res.status(200).send({ result, fields });
    });
    } catch (error) {
      if (error) throw error;
    }
};

// Get a to-do task
exports.getTodo = async(req, res) => {
  try {
    const id = req.params.id;
    const sql = "SELECT * FROM todo where id = ?";
  
    db.dbConnection.query(sql, id, (err, result, fields) => {
      if (err) throw res.status(400).send(err.message);
      res.status(200).send({ result, fields });
    });
  } catch (error) {
    if (error) throw error;
  }
};

// Update a to-do task
exports.updateTodo = (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedData = [data.todo_desc, data.is_completed, id];

    const sql = 
      "UPDATE todo SET todo_desc = ?, is_completed = ? WHERE id = ?";
    
    db.dbConnection.query(sql, updatedData, (err, result) => {
      if (err) throw res.status(400).send(err.message);
      res.status(200).send({ result, msg: "To-do has been updated !" });
    });
  } catch (error) {
    if (error) throw error;
  }
};

// Delete a to-do task
exports.deleteTodo = (req, res) => {
  try {
    const id = req.params.id;

    const sql = 
      "DELETE FROM todo WHERE id = ?";
    
    db.dbConnection.query(sql, id, (err, result) => {
      if (err) throw res.status(400).send(err.message);
        res.status(200).send({ result, msg: "To-do has been deleted !" });
    });
    
  } catch (error) {
    if (error) throw error;
  }
};
