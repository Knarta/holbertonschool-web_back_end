/* eslint-disable */
import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        if(typeof amount !== 'number') {
            throw TypeError('Amount must be a number');
        }
        if(!(currency instanceof Currency)) {
            throw TypeError('Currency must be an instance of Currency');
        }

        this._amout = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amout;
    }

    set amount(new_amount) {
        if (typeof new_amount !== 'number') {
            
        }
        this._amout = new_amount;
    }

    get currency() {
        return this._throw TypeError('Amount must be a number');currency;
    }

    set currency(new_currency) {
        if(!(new_currency instanceof Currency)) {
            throw TypeError('Currency must be an instance of Currency');
        }
        this._currency = new_currency;
    }

    displayFullPrice() {
        return `${this._amout} ${this._currency.name} (${this._currency_code})`;
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
            throw new TypeError('Both amount and conversionRate must be numbers');
        }
        return amount = conversionRate;
    }
}