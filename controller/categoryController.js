const Category = require("../models/categoryModel");

const newCategory = async (req, res) => {
  let myCategory = new Category({
    categoryName: req.body.categoryName,
    subCategory: req.body.subCategory,
  });

  try {
    await myCategory.save();
    let all=await Category.find()
    res.json({ getAllCategories: all });
  } catch (error) {
    res.send("Cannot save new Category: " + error.message);
  }
};

const findCategoryById = async (req, res) => {
  try {
    let category = await Category.findById(req.params.Id);
    res.json({ getCategoryById: category });
  } catch (error) {
    res.send("Cannot find category: " + error.message);
  }
};

const getAllCategories = (req, res) => {
  Category.find()
    .then((categories) => {
      res.json({ getAllCategories: categories });
    })
    .catch((err) => {
      res.send(" no categories: " + err.message);
    });
};

const updateById = (req, res) => {
  Category.findByIdAndUpdate(req.params.Id, {
    categoryName: req.body.categoryName,
  })
    .then((category) => {
      res.json({ updateById: category });
    })
    .catch((err) => {
      res.send("cannot update category: " + err.message);
    });
};

const deleteCategoryById = async (req, res) => {
  try {
    let category = await User.findByIdAndDelete(req.params.Id);
    res.send("category deleted" + category);
  } catch {
    res.send("cannot find this category");
  }
};

module.exports = {
  newCategory,
  findCategoryById,
  getAllCategories,
  updateById,
  deleteCategoryById,
};
