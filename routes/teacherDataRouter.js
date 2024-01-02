const router = require("express").Router();
const teacherData = require("../controller/teacherDataController");

router.post("/newData", teacherData.newData);
router.post("/findDataById", teacherData.findDataById);
router.get('/getAllTeachers',teacherData.getAllTeachers);
router.delete("/deleteDataById", teacherData.deleteDataById);
router.post("/addTurn", teacherData.addTurn);


module.exports=router;
