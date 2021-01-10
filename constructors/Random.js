const { LengthError } = require('../errors/Errors')

Array.prototype.random = function () {
    try {
        if (this.length === 0) {
            throw new LengthError('Array needs to have one or more elements.');
        }
        else if (this.length === 1) {
            return this[0];
        }
        else {
            return this[Math.floor(Math.random() * this.length)];
        }
    }
    catch (error) {
        console.error(error)
    }
};