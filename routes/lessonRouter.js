const router = require("express").Router();
const lesson = require("../controller/lessonController");

router.post("/newLesson", lesson.newLesson);
router.get("/findLessonById/:id", lesson.findLessonById);
router.get("/getAllLessons/:id", lesson.getAllLessons);
router.delete("/deleteLessonById/:id", lesson.deleteLessonById);
module.exports=router
