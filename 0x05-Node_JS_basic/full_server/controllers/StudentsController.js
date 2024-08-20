import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const dataPath = process.argv[2];

    readDatabase(dataPath)
      .then((data) => {
        let output = 'This is the list of our students\n';
        for (const field in data) {
          const studentList = data[field].join(', ');
          output += `Number of students in ${field}: ${data[field].length}. List: ${studentList}\n`;
        }
        response.status(200).send(output.trim()); // Send the full response at once
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    const validMajors = ['CS', 'SWE'];
    if (!validMajors.includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    const dataPath = process.argv[2];
    readDatabase(dataPath)
      .then((data) => {
        if (!data[major]) {
          return response.status(500).send(`Major parameter must be CS or SWE`);
        }
        const studentList = data[major].join(', ');
        response.status(200).send(`List: ${studentList}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
export default StudentsController;
module.exports = StudentsController;