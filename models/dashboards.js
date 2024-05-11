const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const dashboardsPath = path.join(__dirname, "./dashboards.json");

async function listDashboards() {
  const dashboards = await fs.readFile(dashboardsPath);
  return JSON.parse(dashboards);
}

async function getDashboardById(id) {
  const dashboards = await listDashboards();
  const result = dashboards.find((item) => item.id === id);
  return result || null;
}

async function addDashboard({ title }) {
  const dashboards = await listDashboards();
  const newDashboard = {
    id: uuidv4(),
    title,
  };

  dashboards.push(newDashboard);
  await fs.writeFile(dashboardsPath, JSON.stringify(dashboards, null, 2));
  return newDashboard;
}

async function removeDashboard(id) {
  const dashboards = await listDashboards();
  const index = dashboards.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = dashboards.splice(index, 1);
  await fs.writeFile(dashboardsPath, JSON.stringify(dashboards, null, 2));
  return result;
}

const updateDashboardById = async (id, data) => {
  const dashboards = await listDashboards();
  const index = dashboards.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  dashboards[index] = { id, ...data };
  await fs.writeFile(dashboardsPath, JSON.stringify(dashboards, null, 2));
  return dashboards[index];
};

module.exports = {
  listDashboards,
  getDashboardById,
  removeDashboard,
  addDashboard,
  updateDashboardById
};
