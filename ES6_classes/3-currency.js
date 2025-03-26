/* eslint-disable */
export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }

    get code() {
        return this._code;
    }

    set code(new_code) {
        if (typeof new_code !== 'string') {
            throw TypeError('Code must be a string');
        }
        this._code = new_code;
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

    displayFullCurrency() {
        return `${this.name} ${this.code}`;
    }
}