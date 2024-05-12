const { Board } = require("../models/board");

const { HttpError, ControllerWrapper } = require("../helpers");

const listDashboards = async (req, res) => {
  const result = await Board.find();
  res.json(result);
};

// const getDashboardById = async (req, res) => {
//   const { dashboardId } = req.params;
//   const result = await dashboards.getDashboardById(dashboardId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

const addDashboard = async (req, res) => {
  const result = await Board.create(req.body);
  res.status(201).json(result);
};

// const updateDashboardById = async (req, res) => {
//   const { dashboardId } = req.params;
//   const result = await dashboards.updateDashboardById(dashboardId, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const removeDashboard = async (req, res, next) => {
//   const { dashboardId } = req.params;
//   const result = await dashboards.removeDashboard(dashboardId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json({ message: "Delete success" });
// };

module.exports = {
  listDashboards: ControllerWrapper(listDashboards),
  // getDashboardById: ControllerWrapper(getDashboardById),
  addDashboard: ControllerWrapper(addDashboard),
  // updateDashboardById: ControllerWrapper(updateDashboardById),
  // removeDashboard: ControllerWrapper(removeDashboard),
};
