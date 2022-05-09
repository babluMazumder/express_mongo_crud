const express = require('express');
const app     = express();
const {Student} = require('../models/student.model');



const initialize = (req, res, next) => {
    res.send('hello world');
};

//GET '/tea'
const getAllStudents = (req, res, next) => {
    Student.find().then((students) => {
        res.send(students);
    }).catch((err) => {
        res.send(err);
    });

};

//POST '/tea'
const newStudent = (req, res, next) => {

    const student = new Student({
        name: req.body.name,
        age: req.body.age
    });


    student.save().then(() => {
        res.status(200).send('Student added successfully');
    }).catch((err) => {
        res.status(500).send(err);
    });
};

//POST '/tea'
const updateStudent = (req, res, next) => {

    console.log(req.params.id);

    const student = new Student({
        _id: req.params.id,
        name: req.body.name,
        age: req.body.age
    });


    Student.updateOne({_id: req.params.id}, student).then(() => {
        res.status(200).send('Student updated successfully');
    }).catch((err) => {
        res.status(500).send(err);
    });
};

//DELETE '/tea'
const deleteAllStudent = (req, res, next) => {
    Student.deleteMany().then(() => {
        res.status(200).send('Student deleted successfully');
    }).catch((err) => {
        res.status(500).send(err);
    }
    );
};

//GET '/tea/:name'
const getOneStudent = (req, res, next) => {
    Student.findOne({name: req.params.name}).then((student) => {

        student.age = 32;
        student.save();

        res.send(student);
    }
    ).catch((err) => {
        res.send(err);
    });
};



//export controller functions
module.exports = {
    initialize,
    getAllStudents, 
    newStudent,
    deleteAllStudent,
    getOneStudent,
    updateStudent
};
