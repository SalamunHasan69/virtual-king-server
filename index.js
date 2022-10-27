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

app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedCourse = courses.find(c => c.id == id);
  console.log(selectedCourse);
  res.send(selectedCourse);
})

app.listen(port, () => {
  console.log('Courses server running on port');
});