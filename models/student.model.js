const { Schema, model } = require('mongoose');

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const Student = model('Student', StudentSchema);
module.exports.Student = Student;