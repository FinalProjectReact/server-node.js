const router = require("express").Router();
const lesson = require("../controller/lessonController");

router.post("/newLesson", lesson.newLesson);
router.get("/findLessonById/:id", lesson.findLessonById);
router.get("/getAllLessonsByPupilId", lesson.getAllLessonsByPupilId);
router.get("/getAllLessonsByTeacherId/:techerId", lesson.getAllLessonsByTeacherId);
router.get("/getAllLessons", lesson.getAllLessons);
router.put("/updateStatus", lesson.updateStatus);

router.delete("/deleteLessonById", lesson.deleteLessonById);
module.exports=router
