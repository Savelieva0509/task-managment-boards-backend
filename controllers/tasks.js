const { Task } = require("../models/task");
const { HttpError, ControllerWrapper } = require("../helpers");

const listTasks = async (req, res) => {
  const { boardId } = req.params;
  const result = await Task.find({ boardId });
  res.json(result);
};

const addTask = async (req, res) => {
  const { boardId } = req.params;
  const taskData = { ...req.body, boardId };
  const result = await Task.create(taskData);
  res.status(201).json(result);
};

const updateTaskById = async (req, res) => {
  const { boardId, taskId } = req.params;
  const result = await Task.findOneAndUpdate(
    { _id: taskId, boardId: boardId },
    req.body,
    { new: true }
  );
  if (!result) {
    throw HttpError(404, "Task not found");
  }
  res.json(result);
};

const removeTask = async (req, res, next) => {
  const { boardId, taskId } = req.params;
  const result = await Task.findOneAndDelete({ _id: taskId, boardId: boardId });
  if (!result) {
    throw HttpError(404, "Task not found");
  }
  res.json({ message: "Delete success" });
};

const updateStatus = async (req, res) => {
  const { boardId, taskId } = req.params;
  const result = await Task.findByIdAndUpdate(
    { _id: taskId, boardId: boardId },
    req.body,
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

module.exports = {
  listTasks: ControllerWrapper(listTasks),
  addTask: ControllerWrapper(addTask),
  updateTaskById: ControllerWrapper(updateTaskById),
  removeTask: ControllerWrapper(removeTask),
  updateStatus: ControllerWrapper(updateStatus),
};
