const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
    follower: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    followee: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

const Follow = mongoose.model('follow', FollowSchema);

module.exports = Follow;