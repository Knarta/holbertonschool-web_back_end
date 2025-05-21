import { readDatabase } from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const database = process.argv[2];
    readDatabase(database)
      .then((fields) => {
        let output = 'This is the list of our students\n';
        const total = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
        output += `Number of students: ${total}\n`;
        
        Object.entries(fields)
          .sort(([a], [b]) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
          .forEach(([field, names]) => {
            output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
          });
        
        response.status(200).send(output);
      })
      .catch(() => {
        response.status(500).send('This is the list of our students\nCannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const database = process.argv[2];
    readDatabase(database)
      .then((fields) => {
        const students = fields[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
} 