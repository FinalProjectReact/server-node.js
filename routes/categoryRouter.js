const router=require("express").Router();//ראוטר שאקפרס מספק לניתובים
// ליבא את הקונטרולר שאליו נרצה להפנות את הקריאות
const category=require("../controller/categoryController")

router.post('/newCategory',category.newCategory);
router.get('/findCategoryById/:id',category.findCategoryById);
router.get('/getAllCategories',category.getAllCategories);
router.patch('/updateById/:id',category.updateById);
router.delete("/deleteCategoryById/:id",category.deleteCategoryById);

module.exports=router
