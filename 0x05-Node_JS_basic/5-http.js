const http = require('http');
const fs = require('fs');
const PORT = 1245;
const pat = process.argv[2]

const app = http.createServer((req, resp) => {
  const { method, url } = req;
  if (url === '/' && method === 'GET') {
    resp.writeHead(200, { 'Content-Type': 'text/plain' });
    resp.end('Hello Holberton School!');
  } else if (url === '/students' && method === 'GET') {
    resp.writeHead(200, { 'Content-Type': 'text/plain' });
    resp.write('This is the list of our students\n');
    const readStream = fs.createReadStream(pat, 'utf-8');

    let data = '';
    readStream.on('data', chunk => {
      data += chunk; // Accumulate chunks of data
    });

    readStream.on('end', () => {
      const fileLines = data.toString('utf-8').trim().split('\n');
      const propNames = fileLines[0].split(',');
      const finalList = [];

      for (let i = 1; i < fileLines.length; i++) {
        const valueList = fileLines[i].split(',');
        const obj = {};
        propNames.forEach((value, index) => {
          obj[value] = valueList[index];
        });
        finalList.push(obj);
      }

      const sw = [];
      const cs = [];
      finalList.forEach((element) => {
        if (element.field === 'SWE') {
          sw.push(element.firstname);
        } else if (element.field === 'CS') {
          cs.push(element.firstname);
        }
      });

      const stdObj = { CS: cs, SWE: sw };

      resp.write(`Number of students: ${finalList.length}\n`);
      for (const [field, students] of Object.entries(stdObj)) {
        resp.write(
          `Number of students in ${field}: ${
            students.length
          }. List: ${students.join(', ')}\n`
        );
      }
      resp.end();
    });

    readStream.on('error', (err) => {
      resp.end(`Error: ${err.message}`);
    });
  } else {
    resp.writeHead(404, { 'Content-Type': 'text/plain' });
    resp.end('Not Found');
  }
}).listen(PORT);

module.exports = app;
