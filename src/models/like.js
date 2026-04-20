const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    onmodel: {
        type: String,
        required: true,
        enum: ['Tweet', 'Comment'],
    },
    likeable : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onmodel',
    }
}, { timestamps: true });

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;