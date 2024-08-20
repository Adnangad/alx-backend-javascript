const http = require('http');
const app = http.createServer((req, resp) => {
  try {
    resp.statusCode = 200;
    resp.setHeader(
      'Content-Type',
      'text/plain'
    );
    resp.end('Hello Holberton School!');
  } catch (error) {
    throw new Error(error);
  }
});
const PORT = 1245;
app.listen(
  PORT,
  () => {
    console.log('...');
  }
);
module.exports = app;
