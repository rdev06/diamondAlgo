const service = require('./service');

module.exports = input => {
    const alphabetArray = service.getAlphabetArray(input);
    const toPrintArray = service.algoLogic(alphabetArray);
    return toPrintArray;
}