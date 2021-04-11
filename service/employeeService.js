const { addEmployeeRepo, getEmployeeRepo } = require("../repository/db");
const { v4: uuidv4 } = require("uuid");

const addEmployee = async (employee) => {
  if (employee) {
    const userId = uuidv4();
    return await addEmployeeRepo({ userId, ...employee });
  }
  return { ok: true, status: "Updated Successfully" };
};

const getEmployee = async (employeeId) => {
  if (employeeId) {
    return await getEmployeeRepo(employeeId);
  }
  return { ok: true, status: "Updated Successfully" };
};

module.exports = { addEmployee, getEmployee };
