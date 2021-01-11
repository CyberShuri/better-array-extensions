Array.prototype.count = function (element) {
    try {
        if (element === undefined) return this.length;

        var count = 0;

        for (i = 0; i < this.length; i++) {
            if (this[i] === element) count++;
        }

        return count;
    }
    catch (error) {
        console.error(error)
    }
};
