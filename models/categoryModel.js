const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({ 

    categoryName: { type: String, require},
    subCategoty:[{ type: String, require }],
}) 

module.exports = mongoose.model("Category", categorySchema)