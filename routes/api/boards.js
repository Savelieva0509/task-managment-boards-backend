const express = require("express");
const ctrl = require("../../controllers/boards");
const { schemas } = require("../../models/board");
const { validateBody } = require("../../middlewares");
const router = express.Router();

router.get("/", ctrl.listDashboards);

// router.get("/:dashboardId", ctrl.getDashboardById);

router.post("/", validateBody(schemas.addSchema), ctrl.addDashboard);

// router.put(
//   "/:dashboardId",
//   validateBody(schemas.addSchema),
//   ctrl.updateDashboardById
// );

// router.delete("/:dashboardId", ctrl.removeDashboard);

module.exports = router;
