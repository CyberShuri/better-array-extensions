Array.prototype.first = function (number) {
    try {
        if (number === undefined || number === null) return this[0];
        if (number >= this.length) return this;
        if (number <= 0) throw new Error('Value cannot be lower or equal to 0.');

        var array = [];

        for (i = 0; i < number; i++) {
            array.push(this[i]);
        }

        return array;
    }
    catch (error) {
        console.error(error)
    }
};
