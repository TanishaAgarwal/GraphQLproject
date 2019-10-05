const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    genre: String,
    authorid: String
});

module.exports = mongoose.model('Books', BookSchema);