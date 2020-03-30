module.exports = app => {
    const toDO = require("../controllers/todo.controller");

    app.post("/todos/todo/create", toDO.createTodo);
    
    app.get("/todos", toDO.getAlltodos);
    app.get("/todos/todo/:id", toDO.getTodo);
    
};