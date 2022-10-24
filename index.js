const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Courses API Running')
});

app.listen(port, () => {
  console.log('Courses server running on port');
})