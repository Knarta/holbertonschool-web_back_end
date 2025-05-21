/* eslint-disable */
import fs from 'fs/promises';

export async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1);
    const fields = {};

    for (const student of students) {
      const parts = student.split(',');
      if (student.trim() !== '' && parts.length >= 4) {
        const firstname = parts[0].trim();
        const field = parts[3].trim();
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }
    }

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}