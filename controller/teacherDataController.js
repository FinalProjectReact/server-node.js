const TeacherData = require("../models/teacherDataModel");
const user = require("../models/userModel");
const category = require("../models/categoryModel");

const newData = async (req, res) => {
  console.log("teacherrrrrr", req.body);
  try {
    let myData = new TeacherData({
      userId: req.body.userId,
      dateBirth: req.body.dateBirth,
      city: req.body.city,
      str: req.body.str,
      numStr: req.body.numStr,
      status: req.body.status,
      aboutMe: req.body.aboutMe,
      lessonPlace: req.body.lessonPlace,
      categories: req.body.categories,
    });

    await myData.save();
    console.log("myData", myData);
    res.status(200).send(myData);
  } catch (error) {
    res.status(500).json({ error: "Cannot save new data: " + error.message });
  }
};
const addTurn = async (req, res) => {
  console.log(req.body);
  const { id, message } = req.body;
  console.log(id);

  try {
    // Find the teacher data by ID
    let teacherData = await TeacherData.findById(id);
    console.log("ttt" + teacherData);
    if (!teacherData) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    // Add the turn to the turns array
    teacherData.turns.push(message.toString());

    // Save the updated teacher data
    await teacherData.save();

    res.status(200).json({ message: "Turn added successfully", teacherData });
  } catch (error) {
    res.status(500).json({ error: "Cannot add turn: " + error.message });
  }
};
const getAllTeachers = (req, res) => {
  TeacherData.find()
    .populate("userId")
    .then((teacher) => {
      res.json({ getAllTeachers: teacher });
    })
    .catch((err) => {
      res.send(" no teacher: " + err.message);
    });
};

const findDataById = async (req, res) => {
  try {
    let data = await TeacherData.findOne({ userId: req.body.userId });

    if (data) {
      res.status(200).send(data);
      console.log(data);
    } else {
      res.status(400).send("Cannot find this data: " + error.message);
    }
  } catch (error) {
    res.send("Cannot find this data: " + error.message);
  }
};

const deleteDataById = async (req, res) => {
  try {
    let data = await TeacherData.findByIdAndDelete(req.params.Id);
    res.send("data deleted" + data);
  } catch {
    res.send("Cannot find this data");
  }
};

module.exports = {
  newData,
  findDataById,
  getAllTeachers,
  deleteDataById,

  addTurn,
};
