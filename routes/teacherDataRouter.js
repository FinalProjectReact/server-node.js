const router = require("express").Router();
const teacherData = require("../controller/teacherDataController");

router.post("/newData", teacherData.newData);
router.get("/findDataById/:id", teacherData.findDataById);
router.delete("/deleteDataById", teacherData.deleteDataById);


module.exports=router
