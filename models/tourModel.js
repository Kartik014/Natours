const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A tour must have the name"],
        unique: true
    },
    id:{
        type: Number,
        required: [true,"A tour must have id"],
    },
    duration: {
        type: Number,
        required: [true, "The duration of a tours is mandatory!"]
    },
    rating: {
        type: Number,
        default: 4.5
    },
    maxGroupSize: {
        type: Number,
        required: [true, "A group must have a group size"]
    },
    difficulty: {
        type: String,
        required: [true, "A tour must have difficulty"]
    },
    ratingsQuantity:{
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, "A tour must have the pirce"]
    },
    createdAt:{
        type: Date,
        default:Date.now()
    }
});

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour;