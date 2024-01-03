const lesson = require("../models/lessonModel");
const user = require("../models/userModel");
const teacher = require("../models/teacherDataModel");

const category = require("../models/categoryModel");
const mongoose = require('mongoose');

const newLesson = async (req, res) => {
  // כאן יש להוסיף יישום הפרטים מהבקשה כגון id_teacher ו-id_pupil
  let myLesson = new lesson({
    id_teacher: req.body.id_teacher,
    id_pupil: req.body.id_pupil,
    categories: req.body.categories, // אם יש צורך לשלוח קטגוריות
    status: req.body.status,
    text:req.body.text
  });

  try {
    await myLesson.save();
    res.send(myLesson);
  } catch (error) {
    res.status(500).send("Cannot save new Lesson: " + error.message);
  }
};

const findLessonById = async (req, res) => {
  try {
    let lesson = await lesson.findById(req.params.Id);
    res.json({ getLessonById: lesson });
  } catch (error) {
    res.send("Cannot find lesson: " + error.message);
  }
};

const getAllLessons = (req, res) => {
  lesson.find().populate('id_pupil').populate('id_teacher')
    .then((lessons) => {
      res.json({ getAllLessons: lessons });
      console.log(getAllLessons);
    })
    .catch((err) => {
      res.send(" no lessons: " + err.message);
    });
};

const getAllLessonsByTeacherId = (req, res) => {
  const pupilId = req.params.teacherId; // אנחנו מניחים שה־id של התלמיד יתקבל דרך ה-URL, עליך לוודא שזה מגיע כראוי
  lesson.find({ id_pupil: pupilId })
      .then((lessons) => {
      res.json({ getAllLessons: lessons });
    })
    .catch((err) => {
      res.send(" no lessons: " + err.message);
    });
};

const getAllLessonsByPupilId = (req, res) => {
  const pupilId = req.params.pupilId; // אנחנו מניחים שה־id של התלמיד יתקבל דרך ה-URL, עליך לוודא שזה מגיע כראוי
  lesson.find({ id_pupil: pupilId })
      .then((lessons) => {
      res.json({ getAllLessons: lessons });
    })
    .catch((err) => {
      res.send(" no lessons: " + err.message);
    });
};

const deleteLessonById = async (req, res) => {
  try {
    let lesson = await lesson.findByIdAndDelete(req.params.Id);
    res.send("lesson deleted" + lesson);
  } catch {
    res.send("Cannot find this lesson");
  }
};

const updateStatus = async (req, res) => {
  console.log(req.body.status)
  try {
    
    let lessonId=req.body.lessonId;
   let  newStatus=req.body.status;
    // בדיקה האם המזהה תקין
    if (!mongoose.Types.ObjectId.isValid(lessonId)) {
      throw new Error('Invalid lessonId');
    }

    // בדיקה האם הסטטוס החדש תקין (יש לו ערך בוליאני)
    if (typeof newStatus !== 'boolean') {
      throw new Error('Invalid newStatus');
    }

    // ביצוע העדכון במסד הנתונים
    const updatedLesson = await lesson.findByIdAndUpdate(
      lessonId,
      { status: newStatus },
      // { new: true } // הגדרה זו מחזירה את המידע המעודכן אחרי ביצוע העדכון
    );

    return { success: true, status: updatedLesson.status };
  } catch (error) {
    console.error('Error updating lesson status:', error.message);
    return { success: false, error: error.message };
  }
};

module.exports = { newLesson, findLessonById,getAllLessons,updateStatus,getAllLessonsByTeacherId, getAllLessonsByPupilId, deleteLessonById };
