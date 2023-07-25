const router = require("express").Router();
const lesson = require("../controller/lessonController");

router.post("/newLesson", lesson.newLesson);
router.get("/findLessonById/:id", lesson.findLessonById);
router.get("/getAllLessons", lesson.getAllLessons);
router.delete("/deleteLessonById", lesson.deleteLessonById);
module.exports=router
