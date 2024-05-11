const express = require("express");

const router = express.Router();

const dashboards = require("../../models/dashboards");

const { HttpError } = require("../../helpers");

router.get("/", async (req, res, next) => {
  try {
    const result = await dashboards.listDashboards();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:dashboardId", async (req, res, next) => {
  try {
    const { dashboardId } = req.params;
    const result = await dashboards.getDashboardById(dashboardId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
