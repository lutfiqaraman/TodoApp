module.exports = app => {
    const toDO = require("../controllers/todo.controller");

    //Create a To-do 
    app.post("/todos/todo/create", toDO.createTodo);
    
    //Get all To-dos and a To-do
    app.get("/todos", toDO.getAlltodos);
    app.get("/todos/todo/:id", toDO.getTodo);

    //Update a To-do
    app.put("/todos/todo/:id", toDO.updateTodo);

    //Delete a To-do
    app.delete("/todos/todo/:id", toDO.deleteTodo);
};