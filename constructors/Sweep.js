Array.prototype.sweep = function (callback = () => {}) {
    try {
        if (typeof callback !== 'function') throw new TypeError('Callback needs to be of type "function".');

        this.forEach(el => {
            if (callback(el) === true) this.splice(this.indexOf(el), 1);
        })
    }
    catch (error) {
        console.error(error)
    }
};
