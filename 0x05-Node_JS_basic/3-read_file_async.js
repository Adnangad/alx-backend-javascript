function countStudents (databasePath) {
  return new Promise((resolve, reject) => {
    const fs = require('fs');
    fs.readFile(databasePath, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length < 2) {
        reject(new Error('Cannot load the database'));
        return;
      }
      lines.shift();
      const studentsByField = {};
      let totalStudents = 0;
      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (field) {
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
          totalStudents += 1;
        }
      });

      console.log(`Number of students: ${totalStudents}`);
      for (const field in studentsByField) {
        const studentList = studentsByField[field].join(', ');
        console.log(
          `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentList}`
        );
      }
      resolve();
    });
  });
}
module.exports = countStudents;
