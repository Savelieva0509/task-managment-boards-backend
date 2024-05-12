const { Board } = require("../models/board");

const { HttpError, ControllerWrapper } = require("../helpers");

const listBoards = async (req, res) => {
  const result = await Board.find();
  res.json(result);
};

const getBoardById = async (req, res) => {
  const { boardId } = req.params;
  const result = await Board.findById(boardId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addBoard = async (req, res) => {
  const result = await Board.create(req.body);
  res.status(201).json(result);
};

const updateBoardById = async (req, res) => {
  const { boardId } = req.params;
  const result = await Board.findByIdAndUpdate(boardId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const removeBoard = async (req, res, next) => {
  const { boardId } = req.params;
  const result = await Board.findOneAndDelete(boardId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Delete success" });
};

module.exports = {
  listBoards: ControllerWrapper(listBoards),
  getBoardById: ControllerWrapper(getBoardById),
  addBoard: ControllerWrapper(addBoard),
  updateBoardById: ControllerWrapper(updateBoardById),
  removeBoard: ControllerWrapper(removeBoard),
};
