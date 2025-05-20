/* eslint-disable */
const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const database = process.argv[2];

// Check if database file exists
try {
  if (!database) {
    throw new Error('Please provide the database file path as an argument');
  }
  fs.accessSync(database, fs.constants.R_OK);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(database)
    .then(() => {
      try {
        const data = fs.readFileSync(database, 'utf8');
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);
        const fields = {};
        let total = 0;

        for (const student of students) {
          const parts = student.split(',');
          if (student.trim() !== '' && parts.length >= 4) {
            const firstname = parts[0].trim();
            const field = parts[3].trim();
            if (!fields[field]) fields[field] = [];
            fields[field].push(firstname);
            total += 1;
          }
        }

        res.write(`Number of students: ${total}\n`);
        Object.entries(fields).forEach(([field, names]) => {
          res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
        });
        res.end();
      } catch (err) {
        res.status(500).send('Cannot load the database');
      }
    })
    .catch(() => {
      res.status(500).send('Cannot load the database');
    });
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use`);
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});

module.exports = app; 