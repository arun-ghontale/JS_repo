let express = require("express");
let path = require("path");

let app = express();
app.use(express.json());
app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");

let users = [{name:'arun'},{name:'vijay'},{name:'suhas'},{name:'ankur'}]


// [['vijay,28'],['arun',22]].forEach((each) => {
//
//   users.push({
//     name : each[0],
//     age : each[1]
//   })
//
// })
// console.log(users)

app.get("/",function(req,res){
  res.render("index",{
    title : req.query.message || 'default hey'
  })
})

app.get("/users",function(req,res){
  res.send(users)
})

app.post("/users",function(req,res){
  console.log(typeof req.body,req.body);
  users.push({
    name : req.body.name,
  });
  res.json(users);
})

console.log("Running on port 3000")
app.listen(3000);
