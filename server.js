const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://savelieva0509:W5SEVhhJ3axtppS9@cluster0.rhhmecl.mongodb.net/boards_reader?retryWrites=true&w=majority&appName=Cluster0";

//const { DB_HOST, PORT = 3001 } = process.env;
// mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3001, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });