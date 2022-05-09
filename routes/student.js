const express = require('express');
const app     = express();
const router  = express.Router();



const StudentController = require('../controllers/StudentController');

router.get('/', StudentController.initialize);
router.get('/students', StudentController.getAllStudents);
router.post('/student', StudentController.newStudent);
router.delete('/students', StudentController.deleteAllStudent);

router.get('/student/:name', StudentController.getOneStudent);
router.put('/student/:id', StudentController.updateStudent);

module.exports = router;
