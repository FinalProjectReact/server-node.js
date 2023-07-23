// /מה  APPאחראי על הניתוב 
// לפונקציה המתאימה בקונטרולר 

const router=require("express").Router();//ראוטר שאקפרס מספק לניתובים
// ליבא את הקונטרולר שאליו נרצה להפנות את הקריאות
const user=require("../controller/userController")

router.post('/newUser',user.newUser);
router.get('/findUserById/:id',user.findUserById);
router.get('/getAllUsers',user.getAllUsers);
router.post('/findUserByName',user.findUserByName);
router.patch('/updateById/:id',user.updateById);
router.patch('/updateOne/:name',user.updateOne);
router.delete("/deleteUserById/:id",user.deleteUserById);
router.delete('/deleteOne',user.deleteOne)


module.exports=router;