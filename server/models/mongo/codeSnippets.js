const mongoose = require('mongoose');
const { Schema } = mongoose;
const CodeSnippetSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    tags: [String],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
const CodeSnippet = mongoose.model('CodeSnippet', CodeSnippetSchema);
module.exports = CodeSnippet;
