const express = require('express');
const app     = express();
const port    = 3000;

const lol = require('./routes/student.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

console.log(lol);
app.use('/', lol); //to use the routes



const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test').
then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});



// app.get('/', (req, res) => {
//     res.send('hello world');
// });


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

