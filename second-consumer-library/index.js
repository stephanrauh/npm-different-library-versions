const { DeepThought } = require('beyondjava-example-base-library');

function useAndReturnDeepThoughts() {
    return new DeepThought().printDeepThoughts();
}

module.exports = { useAndReturnDeepThoughts };