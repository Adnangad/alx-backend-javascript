const readDatabase = require('./utils');
readDatabase('databae.csv').then((data) => {
  for (const field in data) {
    const studentList = data[field].join(', ');
    if (field === 'CS') {
      console.log(`Number of students in ${field}: ${data[field].length}. List: ${studentList}`);
    }
  }
}).catch((error) => {
  console.error(error);
});
