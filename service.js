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
  upperHalfD: function (array) {
    const k = array.length;
    const toReturn = [];
    for (let i = 0; i < k; i++) {
      let p = this.getSpace(k - i - 1) + array[i];
      if (i > 0) {
        p += this.getSpace(2 * i - 1) + array[i];
      }
      toReturn.push(p);
    }
    return toReturn;
  },
  lowerHalfD: function (array) {
    const k = array.length;
    const toReturn = [];
    for (let j = k - 2; j > -1; j--) {
      let p = this.getSpace(k - j - 1) + array[j];
      if (j > 0) {
        p += this.getSpace(2 * j - 1) + array[j];
      }
      toReturn.push(p);
    }
    return toReturn;
  },

  upperHalfX: function (array) {
    const k = array.length;
    const toReturn = [];
    for (let i = 0; i < k; i++) {
      let p = this.getSpace(i) + array[i];
      if (i !== k - 1) {
        p += this.getSpace(k + 2 - 2 * i) + array[i];
      }
      toReturn.push(p);
    }
    return toReturn;
  },
  lowerHalfX: function (array) {
    const k = array.length;
    const toReturn = [];
    for (let j = k - 2; j > -1; j--) {
      const p = this.getSpace(j) + array[j] + this.getSpace(k + 2 - 2 * j) + array[j];
      toReturn.push(p);
    }
    return toReturn;
  },
  mergeString: (a, b) => {
    const toReturn = a.split('');
    for (let i = 0; i < Math.max(toReturn.length, b.length); i++) {
      const e = toReturn[i];
      if (!e || e == ' ') {
        toReturn[i] = b[i] || ' ';
      }
    }
    return toReturn.join('');
  },
  upperHalf: function (array) {
    const toReturn = this.upperHalfD(array);
    const X = this.upperHalfX(array);
    for (let i = 0; i < X.length; i++) {
      const a = toReturn[i];
      const b = X[i];
      toReturn[i] = this.mergeString(a, b);
    }
    return toReturn;
  },
  lowerHalf: function (array) {
    const toReturn = this.lowerHalfD(array);
    const X = this.lowerHalfX(array);
    for (let i = 0; i < X.length; i++) {
      toReturn[i] = this.mergeString(toReturn[i], X[i]);
    }
    return toReturn;
  },

  algoLogic: function (array) {
    return this.upperHalf(array).concat(this.lowerHalf(array));
    // return this.upperHalfX(array).concat(this.lowerHalfX(array));
  },
};
