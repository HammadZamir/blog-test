const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
    username: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

const commentModle=mongoose.model("comment", CommentSchema)
module.exports =commentModle