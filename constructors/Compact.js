Array.prototype.compact = function () {
    try {
        for (i = 0; i < this.length; i++) {
            if (typeof this[i] === 'undefined' || typeof this[i] === 'null') this.splice(i, 1)
        }
    }
    catch (error) {
        console.error(error)
    }
};