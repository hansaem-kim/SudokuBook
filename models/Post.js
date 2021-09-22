const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({ 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    text: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    puzzle: {
        type: Schema.Types.ObjectId,
        ref: 'sudoku'
    },

    time: {
        type: Object
    }
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;