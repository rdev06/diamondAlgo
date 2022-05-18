const alphabets = require('./alphabet.json');

module.exports = {
  getAlphabetArray: (input) => {
    if (!input) throw 'Input is required';
    const indexOfInput = alphabets.indexOf(input);
    if (indexOfInput == -1) throw 'Invalid Input';
    return alphabets.slice(0, indexOfInput + 1);
  },
  getSpace: (n) => Array(n).fill(' ').join(''),
  algoLogic: (array) => {
    const k = array.length;
    const toReturn = [];
    for (let i = 0; i < k; i++) {
      let p = getSpace(k - i) + array[i];
      if (i > 0) {
        p += getSpace(2 * i) + array[i];
      }
      toReturn.push(p);
    }

    for (let j = k - 2; j > -1; j--) {
      let p = getSpace(k - j) + array[j];
      if (j > 0) {
        p += getSpace(2 * j) + array[j];
      }
      toReturn.push(p);
    }
    return toReturn;
  },
  printConsole : array => {
      for (const e of array) {
          console.log(e)
      }
  }
};