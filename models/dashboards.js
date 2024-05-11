const fs = require("fs/promises");
const path = require("path");
import("nanoid")
  .then(({ nanoid }) => {
  })
  .catch((err) => {
    console.error("Ошибка при импорте nanoid:", err);
  });

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

async function addDashboard({ name }) {
  const dashboards = await listDashboards();
  const newDashboard = {
    id: nanoid(),
    name,
    columns: {
      ToDo: [],
      InProgress: [],
      Done: [],
    },
  };

  dashboards.push(newDashboard);
  await fs.writeFile(dashboardsPath, JSON.stringify(dashboards, null, 2));
  return newDashboard;
}

async function removeDashboard(id) {
  const dashboardId = String(id);
  const dashboards = await listDashboards();
  const index = dashboards.findIndex((item) => item.id === dashboardId);
  if (index === -1) {
    return null;
  }
  const [result] = dashboards.splice(index, 1);
  await fs.writeFile(dashboardsPath, JSON.stringify(dashboards, null, 2));
  return result;
}

module.exports = {
  listDashboards,
  getDashboardById,
  removeDashboard,
  addDashboard,
};