// const alphabets = require('./alphabet.json');

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabets = alpha.map((x) => String.fromCharCode(x));

module.exports = {
  getAlphabetArray: (input) => {
    if (!input) throw 'Input is required';
    const indexOfInput = alphabets.indexOf(input);
    if (indexOfInput == -1) throw 'Invalid Input';
    return alphabets.slice(0, indexOfInput + 1);
  },
  getSpace: (n) => Array(n).fill(' ').join(''),
  // upperHalf: function (array) {
  //   const k = array.length;
  //   const toReturn = [];
  //   for (let i = 0; i < k; i++) {
  //     let p = this.getSpace(k - i) + array[i];
  //     if (i > 0) {
  //       p += this.getSpace(2 * i) + array[i];
  //     }
  //     toReturn.push(p);
  //   }
  //   return toReturn;
  // },
  // lowerHalf: function (array) {
  //   const k = array.length;
  //   const toReturn = [];
  //   for (let j = k - 2; j > -1; j--) {
  //     let p = this.getSpace(k - j) + array[j];
  //     if (j > 0) {
  //       p += this.getSpace(2 * j) + array[j];
  //     }
  //     toReturn.push(p);
  //   }
  //   return toReturn;
  // },

  upperHalf: function (array) {
    const k = array.length;
    const toReturn = [];
    for (let i = 0; i < k; i++) {
      let p = this.getSpace(i) + array[i];
      if (i !== k - 1) {
        p += this.getSpace(k + 1 - 2 * i) + array[i];
      }
      toReturn.push(p);
    }
    return toReturn;
  },
  lowerHalf: function (array) {
    const k = array.length;
    const toReturn = [];
    for (let j = k - 2; j > -1; j--) {
      const p = this.getSpace(j) + array[j] + this.getSpace(k + 1 - 2 * j) + array[j];
      toReturn.push(p);
    }
    return toReturn;
  },

  algoLogic: function (array) {
    return this.upperHalf(array).concat(this.lowerHalf(array));
  },
};
