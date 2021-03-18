const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({

    day: {
        type: Date,
        trim: true,
        required: true,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true,
            validate: [({ length }) => length <= 50, 'Type is too long, please shorten!']
        },
    
        name: {
            type: String,
            trim: true,
            required: true,
            validate: [({ length }) => length <= 50, 'Name is too long, please shorten!']
        },
    
        duration: {
            type: Number,
            trim: true,
            required: true,
            default: 0
        },

        distance: {
            type: Number,
            trim: true,
        },
    
        weight: {
            type: Number,
            trim: true,          
        },
    
        reps: {
            type: Number,
            trim: true,
        },
    
        sets: {
            type: Number,
            trim: true,
        }
    }],
})

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;