Array.prototype.plus = function (array) {
    try {
        if (!Array.isArray(array)) throw new TypeError('Parameter must be of type array.');

        return this.concat(array);
    }
    catch (error) {
        console.error(error)
    }
};
