let express = require("express");
let path = require("path");
let methodOverride = require("method-override");
let todosrouter = require("./Routes/todos.js");

let app = express();

/*middleware to parse JSON*/
app.use(express.json());
/*Working with forms and query strings*/
app.use(express.urlencoded({ extended: true }));
/*Support DELETE and PUT methods*/
app.use(
  methodOverride(function(req, res) {
    console.log(req.body);
    if (req.body && typeof req.body == "object" && "_method" in req.body) {
      let method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);
/*Static directory path set*/
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/todos", todosrouter);

// /*update*/
// app.put("/todos/:id", todoscontroller.putTodos);

// /*delete*/
// app.delete("/todos/:id", todoscontroller.deleteTodos);

// /*create*/
// app.post("/todos", todoscontroller.postTodos);

// /*read*/
// app.get("/todos", todoscontroller.getTodos);

// // app.get("/todos", function(req, res) {
// //   res.render("index", {
// //     todos: todos || []
// //   });
// // });

console.log("Running on port 3000");
app.listen(3000);
