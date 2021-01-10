class LengthError extends Error {
    constructor(...params) {
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, LengthError)
        }

        this.name = 'LengthError';
    }
}

module.exports = LengthError;