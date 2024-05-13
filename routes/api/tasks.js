const express = require("express");
const ctrl = require("../../controllers/tasks");
const { schemas } = require("../../models/task");
const { validateBody, isValidId } = require("../../middlewares");
const router = express.Router();

router.get("/", ctrl.listTasks);

router.post("/", validateBody(schemas.addSchema), ctrl.addTask);

router.put("/:boardId", validateBody(schemas.addSchema), ctrl.updateTaskById);

router.delete("/:boardId", isValidId, ctrl.removeTask);

module.exports = router;
