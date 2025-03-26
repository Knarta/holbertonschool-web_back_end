/* eslint-disable */
import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        if(typeof amount !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        if(!(currency instanceof Currency)) {
            throw new TypeError('Currency must be an instance of Currency');
        }

        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(new_amount) {
        if (typeof new_amount !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        this._amount = new_amount;
    }

    get currency() {
        return this._currency;
    }

    set currency(new_currency) {
        if(!(new_currency instanceof Currency)) {
            throw new TypeError('Currency must be an instance of Currency');
        }
        this._currency = new_currency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency_code})`;
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
            throw new TypeError('Both amount and conversionRate must be numbers');
        }
        return amount * conversionRate;
    }
}