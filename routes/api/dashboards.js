const express = require("express");

const Joi = require("joi");

const router = express.Router();

const dashboards = require("../../models/dashboards");

const { HttpError } = require("../../helpers");

const addSchema = Joi.object({
  title: Joi.string().required(),
});

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
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await dashboards.addDashboard(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:dashboardId", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const { dashboardId } = req.params;
    const result = await dashboards.updateDashboardById(dashboardId, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:dashboardId", async (req, res, next) => {
  try {
    const { dashboardId } = req.params;
    const result = await dashboards.removeDashboard(dashboardId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json({ message: "Delete success" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
