const express = require("express");
const ctrl = require("../../controllers/boards");
const { schemas } = require("../../models/board");
const { validateBody, isValidId } = require("../../middlewares");
const router = express.Router();

router.get("/", ctrl.listBoards);

router.get("/:boardId", isValidId, ctrl.getBoardById);

router.post("/", validateBody(schemas.addSchema), ctrl.addBoard);

router.put(
  "/:boardId",
  validateBody(schemas.addSchema),
  ctrl.updateBoardById
);

router.delete("/:boardId",isValidId, ctrl.removeBoard);

module.exports = router;
