const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://kaveen:ABC123@employeedb.hlhnq.mongodb.net/ems?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/*attendance marking part*/
const createAttendance = async (id, epochTime, date) => {
  try {
    await client.connect();
    const collection = client.db("ems").collection("attendance");

    const response = await collection.insertOne({
      userId: id,
      epochTime: epochTime,
      date: date,
      isMarked: true,
    });

    return { ok: response.result.ok === 1 };
  } catch (error) {
    console.log("Something went wrong while connecting to DB");
    return { ok: false };
  }
};

const getAttendanceRecords = async (id, fromTime = 0) => {
  try {
    await client.connect();
    const collection = client.db("ems").collection("attendance");

    const response = await collection
      .find({
        userId: id,
        epochTime: { $gt: fromTime },
      })
      .toArray();

    return { ok: true, data: response };
  } catch (error) {
    console.log("Something went wrong while connecting to DB");
    return { ok: false };
  }
};

const getAllAttendanceRecords = async (fromTime = 0) => {
  try {
    await client.connect();
    const collection = client.db("ems").collection("attendance");

    const response = await collection
      .find({
        epochTime: { $gt: fromTime },
      })
      .toArray();

    return { ok: true, data: response };
  } catch (error) {
    console.log("Something went wrong while connecting to DB");
    return { ok: false };
  }
};

const isAttendanceFoundForDate = async (id, date) => {
  try {
    await client.connect();
    const collection = client.db("ems").collection("attendance");

    const response = await collection
      .find({
        userId: id,
        date: date,
      })
      .toArray();

    return { ok: true, data: response };
  } catch (error) {
    console.log("Something went wrong while connecting to DB");
    return { ok: false };
  }
};

/*add employee part*/

const addEmployeeRepo = async ({
  fName,
  lName,
  email,
  nic,
  DOB,
  age,
  gender,
  maritalStat,
  currAdd,
  permAdd,
  mobileNo,
  landLine,
  emgContact,
  designation,
  department,
  joinedDate,
  workedCompany,
  yearsOfEx,
  empPic,
  cv,
  userId,
}) => {
  try {
    await client.connect();
    const collection = client.db("ems").collection("employees");

    const response = await collection.insertOne({
      FirstName: fName,
      LastName: lName,
      eMail: email,
      NIC: nic,
      DOB: DOB,
      Age: age,
      Gender: gender,
      MaritalStatus: maritalStat,
      CurrentAddress: currAdd,
      PermanentAddress: permAdd,
      MobileNumber: mobileNo,
      LandLineNumber: landLine,
      EmergencyContact: emgContact,
      Designation: designation,
      Department: department,
      JoinedDate: joinedDate,
      PreviouslyWorkedCompany: workedCompany,
      YearsOfExperiance: yearsOfEx,
      EmployeePicture: empPic,
      CV: cv,
      userId,
    });

    return { ok: response.result.ok === 1 };
  } catch (error) {
    console.log("Something went wrong while connecting to DB");
    return { ok: false };
  }
};

const getEmployeeRepo = async (id) => {
  try {
    await client.connect();
    const collection = client.db("ems").collection("employees");

    const response = await collection.findOne({
      userId: id,
    });

    return { ok: true, data: response };
  } catch (error) {
    console.log("Something went wrong while connecting to DB");
    return { ok: false };
  }
};

module.exports = {
  createAttendance,
  getAttendanceRecords,
  isAttendanceFoundForDate,
  getAllAttendanceRecords,
  addEmployeeRepo,
  getEmployeeRepo,
};
