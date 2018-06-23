let todos = [
  {
    id: Math.floor(Math.random() * 100),
    title: "create todos app",
    completed: false
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "fetch milk",
    completed: false
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "Water the garden",
    completed: false
  }
];

const handlers = {
  index: function(req, res) {
    res.render("index", {
      todos: todos || []
    });
  },
  store: function(req, res) {
    // console.log(req.body);
    let todo = {
      id: Math.floor(Math.random() * 100),
      title: req.body.todo,
      completed: false
    };

    todos.push(todo);
    // console.log(todos);
    res.redirect("/todos");
  },
  destroy: function(req, res) {
    // console.log("\n\n\n\n");
    // console.log(req.params.id);
    // console.log(req.body);
    todos = todos.filter(todo => {
      return todo.id !== Number(req.params.id.trim());
    });
    res.redirect("/todos");
  },
  update: function(req, res) {
    // console.log(req.params.id);
    // console.log(req.body);
    todos = todos.map(todo => {
      if (todo.id === Number(req.params.id.trim())) {
        return {
          id: todo.id,
          title: todo.title,

          /*checkbox key wouldn't exist if the checkbox value is off*/

          completed: "checkbox" in req.body ? true : false
        };
      } else {
        return todo;
      }
    });
    res.redirect("/todos");
  }
};

module.exports = handlers;
