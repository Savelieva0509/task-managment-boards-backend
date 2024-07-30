const express = require("express");
const ctrl = require("../../controllers/tasks");
const { schemas } = require("../../models/task");
const { validateBody, isValidId } = require("../../middlewares");
const router = express.Router();

router.get("/:boardId/tasks", ctrl.listTasks);

router.post("/:boardId/tasks", validateBody(schemas.addSchema), ctrl.addTask);

router.put(
  "/:boardId/tasks/:taskId",
  validateBody(schemas.addSchema),
  ctrl.updateTaskById
);

router.delete("/:boardId/tasks/:taskId", isValidId, ctrl.removeTask);

router.patch(
  "/:boardId/tasks/:taskId",
  validateBody(schemas.updStatusSchema),
  ctrl.updateStatus
);

module.exports = router;
