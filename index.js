let express = require("express");
let path = require("path");

let app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");

let todos = [{
  id: Math.floor(Math.random()*100),
  title: 'create todos app',
  completed: false
},
{
  id: Math.floor(Math.random()*100),
  title: 'fetch milk',
  completed: false
},
{
  id: Math.floor(Math.random()*100),
  title: 'Water the garden',
  completed: false
}
];

/*update*/
app.put("/todos/:id",function(req,res){
  console.log(req.params.id)
  res.render("index",{
    todos : req.query.message || 'default hey'
  })
})

/*delete*/
app.delete("/todos/:id",function(req,res){
  console.log(req.params.id)
  console.log(req.body)
  let todo = req.params.todoName
  res.render("index",{
    title : 'delete successful'
  })
})

/*create*/
app.post("/todos",function(req,res){
  console.log(req.body)
  let todo = {
    id: Math.floor(Math.random()*100),
    title:req.body.todo,
    completed:false
  };

  todos.push(todo);
  console.log(todos)
  res.render("index",{
    todos : todos || []
  })
})


/*read*/
app.get("/todos",function(req,res){
  res.render("index",{
    todos : todos || []
  })
})

console.log("Running on port 3000")
app.listen(3000);
