const express = require('express');
const app = express();
const PORT = 1245;
app.get(
  '/',
  (_, resp) => {
    resp.send('Hello Holberton School!');
  }
).listen(
  PORT,
  () => {
    console.log(`Listening at local host port ${PORT}`);
  }
);
module.exports = app;
