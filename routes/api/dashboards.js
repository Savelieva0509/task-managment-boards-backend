const express = require("express");
const ctrl = require("../../controllers/dashboards");
const schemas = require("../../schemas/dashboards");
const { validateBody } = require("../../middlewares");
const router = express.Router();

router.get("/", ctrl.listDashboards);

router.get("/:dashboardId", ctrl.getDashboardById);

router.post("/", validateBody(schemas.addSchema), ctrl.addDashboard);

router.put(
  "/:dashboardId",
  validateBody(schemas.addSchema),
  ctrl.updateDashboardById
);

router.delete("/:dashboardId", ctrl.removeDashboard);

module.exports = router;
