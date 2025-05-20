/* eslint-disable */
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        const databaseFile = process.argv[2];

        if (!databaseFile) {
            res.end('This is the list of our students\n');
            return;
        }

        fs.readFile(databaseFile, 'utf8', (err, data) => {
            if (err) {
                res.end('Cannot load the database\n');
                return;
            }

            const lines = data.split('\n').filter(line => line.trim() !== '');
            const students = {};
            let studentCount = 0;

            lines.forEach(line => {
                const [name, field] = line.split(',');
                if (name && field) {
                    if (!students[field]) {
                        students[field] = [];
                    }
                    students[field].push(name);
                    studentCount++;
                }
            });

            let responseText = 'This is the list of our students\n';
            responseText += `Number of students: ${studentCount}\n`;

            for (const field in students) {
                responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
            }

            res.end(responseText);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

app.listen(1245);

module.exports = app;