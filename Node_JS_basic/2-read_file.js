const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    // Remove header line
    const students = lines.slice(1);
    
    // Count total students
    console.log(`Number of students: ${students.length}`);
    
    // Create a map to store students by field
    const fields = {};
    
    // Process each student
    students.forEach(student => {
      const [firstname, , , field] = student.split(',');
      
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    
    // Print results for each field
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents; 