Array.prototype.minus = function (array) {
    try {
        if (!Array.isArray(array)) throw new TypeError('Parameter has to be of type array.');

        const newArray = this;

        for (i = 0; i < newArray.length; i++) {
            if (array.includes(newArray[i])) {
                newArray.splice(i, 1);

                i--;
            }
        }

        return newArray;
    }
    catch (error) {
        console.error(error)
    }
};
