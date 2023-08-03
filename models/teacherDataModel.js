const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dateBirth: { type: String, require },
  city: { type: String, require },
  str: { type: String, require },
  numStr: { type: String, require },
  status: { type: Boolean, require: true },
  aboutMe: { type: String, require },
  lessonPlace: [{ type: String, require }],

  // categories: [
  //   {
  //     categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  //   },
  // ],
});

module.exports = mongoose.model("TeacherData", dataSchema);
