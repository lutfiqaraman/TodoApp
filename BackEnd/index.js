const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config/.env" });

//Middleware
app.use(cors());
app.use(express.json());

require("./routes/todo.routes")(app);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server has started on ${port}`);
});
