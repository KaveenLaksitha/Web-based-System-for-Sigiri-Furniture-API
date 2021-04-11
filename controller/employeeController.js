const router = require("express").Router();
const { addEmployee, getEmployee } = require("../service/employeeService");

router.post("/employee", async (req, res) => {
  const newEmployee = req.body;
  if (newEmployee) {
    const response = await addEmployee(newEmployee);
    if (response.ok) {
      return res
        .status(201)
        .send({ status: response.status ? response.status : "Success" });
    }
    return res.status(500).send({ status: "Internal Server Error" });
  }
  return res.status(400).send({ status: "Invalid Request" });
});

router.get("/employee/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  if (employeeId) {
    const response = await getEmployee(employeeId);
    if (response.ok) {
      return res.status(200).send({
        status: response.status ? response.status : "Success",
        data: response,
      });
    }
    return res.status(500).send({ status: "Internal Server Error" });
  }
  return res.status(400).send({ status: "Invalid Request" });
});

router.put("/employee/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  if (employeeId) {
    const response = await getEmployee(employeeId);
    if (response.ok) {
      return res.status(200).send({
        status: response.status ? response.status : "Success",
      });
    }
    return res.status(500).send({ status: "Internal Server Error" });
  }
  return res.status(400).send({ status: "Invalid Request" });
});

module.exports = router;
