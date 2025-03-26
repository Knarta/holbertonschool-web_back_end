/* eslint-disable */
export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') {
            throw TypeError('Name must be a string');
        }
        if (typeof length !== 'number') {
            throw TypeError('Length must be a number');
        }
        if (!Array.isArray(students)) {
            throw TypeError('Students must be an array');
        }

        this._name = name;
        this._length = length;
        this._students = students;
    }


    get name() {
        return this._name;
    }

    set name(new_name) {
        if (typeof new_name !== 'string') {
            throw TypeError('Name must be a string');
        }
        this._name = new_name;
    }

    get length() {
        return this._length;
    }

    set length(new_length) {
        if (typeof new_length !== 'number') {
            throw TypeError('Length must be a number');
        }
        this._length = new_length;
    }

    get students() {
        return this._students;
    }

    set students(new_students) {
        if (!Array.isArray(new_students)) {
            throw TypeError('Students must be an array');
        }
        this._students = new_students;
    }

}