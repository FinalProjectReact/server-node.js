const lesson = require("../models/lessonModel");
const user = require("../models/userModel");
const category = require("../models/categoryModel");

const newLesson = async (req, res) => {
  let myLesson = new lesson({
    id_teacher: user._id,
    id_pupil: user._id,
    categoryName: [category._id,],
    status: req.body.status,
  });
  try {
    await myLesson.save();
    res.json({ newLesson: myLesson });
  } catch (error) {
    res.send("Cannot save new Lesson: " + error.message);
  }
};

const findLessonById = async (req, res) => {
  try {
    let lesson = await Lesson.findById(req.params.Id);
    res.json({ getLessonById: lesson });
  } catch (error) {
    res.send("Cannot find lesson: " + error.message);
  }
};

const getAllLessons = (req, res) => {
  Lesson.find()
    .then((lessons) => {
      res.json({ getAllLessons: lessons });
    })
    .catch((err) => {
      res.send(" no lessons: " + err.message);
    });
};

const deleteLessonById = async (req, res) => {
  try {
    let lesson = await Lesson.findByIdAndDelete(req.params.Id);
    res.send("lesson deleted" + lesson);
  } catch {
    res.send("Cannot find this lesson");
  }
};

module.exports = { newLesson, findLessonById, getAllLessons, deleteLessonById };
