const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: String,
        minLength: [3, 'Title must be at least 3 characters'],
        trim: true,
        unique: true,
        uniqueCaseInsensitive: true,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        minLength: [3, 'Description must be at least 3 characters'],
        required: [true, 'Description is required']
    }
}, 
{
    timestamps: true
});

CategorySchema.plugin(uniqueValidator, {message: '{PATH} already exists.'})

module.exports = mongoose.model('Category', CategorySchema);