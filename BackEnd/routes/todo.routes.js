module.exports = app => {
    const toDO = require("../controllers/todo.controller");

    app.post("/todos/todo/create", toDO.createTodo);
};