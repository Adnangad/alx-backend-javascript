const fs = require('fs');

function readDatabase (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error(`Cannot load the database: ${error.message}`));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length < 2) {
        reject(new Error('File is empty or does not have enough data'));
        return;
      }

      lines.shift();
      const stdByField = {};

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (field) {
          if (!stdByField[field]) {
            stdByField[field] = [];
          }
          stdByField[field].push(firstname);
        }
      });

      resolve(stdByField);
    });
  });
}
export default readDatabase;
module.exports = readDatabase;
