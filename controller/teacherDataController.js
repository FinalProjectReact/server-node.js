const TeacherData = require("../models/teacherDataModel");
const user = require("../models/userModel");
const category = require("../models/categoryModel");

const newData = async (req, res) => {
  console.log("teacherrrrrr" , req.body)
  try {
    let myData = new TeacherData({
      userId:req.body.userId,
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
    console.log("myData", myData)
    res.status(200).send(myData);
  } catch (error) {
    res.status(500).json({ error: "Cannot save new data: " + error.message });
  }
};

const getAllTeachers = (req, res) => {
  TeacherData.find().populate('userId')
    .then((teacher) => {
      res.json({ getAllTeachers: teacher });
    })
    .catch((err) => {
      res.send(" no teacher: " + err.message);
    });
};

const findDataById = async (req, res) => {
  try {
    let data = await TeacherData.findById(req.params.Id);
    res.status(200).json({ getDataById: data });
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
};
