const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({ 

    id_teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    id_pupil:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    categories:[{type: String, require}],
    status: { type: Boolean, default: false },
    text:{type:String}
}) 

module.exports = mongoose.model("Lesson", lessonSchema)