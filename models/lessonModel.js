const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({ 

    id_teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    id_pupil:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    categories: [
        {
          categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
        },
      ],
    status: { type: Boolean, default: true }
}) 

module.exports = mongoose.model("Lesson", lessonSchema)