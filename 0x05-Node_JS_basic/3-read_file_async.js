const { error } = require('console');
function countStudents (pat) {
  return new Promise((resolve, reject) => {
    const fs = require('fs');
    fs.readFile(
      pat,
      'utf-8',
      (error, data) => {
        if (error) {
          reject(new Error('Cannot load the database'));
        } else {
          const fileLines = data.toString('utf-8').trim()
            .split('\n');
          const propNames = fileLines[0].split(',');
          const finalList = [];
          for (let i = 0; i < fileLines.length; i++) {
            if (i === 0) {
              continue;
            }
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
          const stdObj = {};
          stdObj.CS = cs;
          stdObj.SWE = sw;
          console.log(`Number of students: ${finalList.length}`);
          for (const [
            field,
            students
          ] of Object.entries(stdObj)) {
            console.log(`Number of students in ${field}: ${
                            students.length
                        }. List: ${students.join(', ')}`);
          }
          resolve(true);
        }
      }
    );
  });
}
module.exports = countStudents;
