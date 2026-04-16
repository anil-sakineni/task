const express = require("express");
const taskController = require("../controllers/task.controller");
const router = express.Router();

router.get("/get-all", taskController.getAllTasks);
router.get("/get/:id", taskController.getTaskById);
router.post("/create", taskController.createTask);
router.put("/update/:id", taskController.updateTask);
router.delete("/delete/:id", taskController.deleteTask);

module.exports = router;