const taskModel = require("../models/task.model");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json({ success: true,
        message: "Tasks retrieved successfully",
        data: tasks });
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const task = await taskModel.findById(req.params.id);
    res.status(200).json({ success: true,
        message: "Task retrieved successfully",
        data: task });
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const task = await taskModel.create(req.body);
    res.status(201).json({ success: true,
        message: "Task created successfully",
        data: task });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const task = await taskModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true,
        message: "Task updated successfully",
        data: task });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await taskModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true,
        message: "Task deleted successfully",
        data: task });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};