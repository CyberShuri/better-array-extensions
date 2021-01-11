Array.prototype.isEmpty = function () {
    try {
        return this.length === 0 ? true : false
    }
    catch (error) {
        console.error(error)
    }
};
