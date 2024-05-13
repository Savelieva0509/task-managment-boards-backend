const { Task } = require("../models/task");

const { HttpError, ControllerWrapper } = require("../helpers");

const listTasks = async (req, res) => {
  const { boardId } = req.params;

  const result = await Task.find({ boardId: boardId });
  res.json(result);
};

const addTask = async (req, res) => {
  const { boardId } = req.params;
  const taskData = { ...req.body, boardId };
  console.log(taskData);
  const result = await Task.create(taskData);
  res.status(201).json(result);
};

const updateTaskById = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const removeTask = async (req, res, next) => {
  const { id } = req.params;
  const result = await Board.findOneAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Delete success" });
};

module.exports = {
  listTasks: ControllerWrapper(listTasks),
  addTask: ControllerWrapper(addTask),
  updateTaskById: ControllerWrapper(updateTaskById),
  removeTask: ControllerWrapper(removeTask),
};
