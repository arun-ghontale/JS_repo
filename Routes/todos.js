let express = require("express");
let todoscontroller = require("../TodosController/todoscontroller.js");
let router = express.Router();

router.get("/", todoscontroller.index);
router.post("/", todoscontroller.store);
router.put("/:id", todoscontroller.update);
router.delete("/:id", todoscontroller.destroy);

module.exports = router;
