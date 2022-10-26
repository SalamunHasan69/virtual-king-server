const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
// const course = require('./data/course.info.json');

app.get('/', (req, res) => {
  res.send('Courses API Running')
});

app.get('/course', (req, res) => {
  res.send(courses)
});

// app.get('/course-info/:id', (req, res) => {
//   const id = req.params.id;
//   const selectedCourse = course.find(c => c._id === id);
//   res.send(selectedCourse);
// })

app.listen(port, () => {
  console.log('Courses server running on port');
});