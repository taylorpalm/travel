const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Comments
let CommentSchema= new Schema({
    id: String,
    body: String,
    name: String,
    email: String,
    date: Date
},{
    collection: 'comments'
});

module.exports = mongoose.model('Comments', CommentSchema);
