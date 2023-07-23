const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ 

    userName: { type: String, default: 'user'},
    password: { type: String, minlength: 6, require },
    phone:{ type: String, require },
    mail: { type: String, require },
    gender:{ type: String, require },
    status:{ type: String, require },
}) 

module.exports = mongoose.model("User", userSchema)