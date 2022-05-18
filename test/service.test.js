const service = require('../service');

describe('Get Alphabet Array', () => {
  it('When there is no input', () => {
    expect(service.getAlphabetArray).toThrow('Input is required');
  });
  it('When there is Invalid input', () => {
    expect(() => service.getAlphabetArray('&')).toThrow('Invalid Input');
  });
  it('When there is input A', () => {
    const array = service.getAlphabetArray('A');
    expect(array).toHaveLength(1);
    expect(array).toEqual(['A']);
  });
  it('When there is input D', () => {
    const array = service.getAlphabetArray('D');
    expect(array).toHaveLength(4);
    expect(array).toEqual(['A', 'B', 'C', 'D']);
  });
});

describe('Get Space', () => {
  it('When input is 4', () => {
    expect(service.getSpace(6)).toHaveLength(6);
  });
});

describe('Check Algo logic', () => {
  it('When input array contains A-D', () => {
    const input = ['A', 'B', 'C', 'D'];
    const output = service.algoLogic(input);
    const toMatch = [
        '    A',
        '   B  B',
        '  C    C',
        ' D      D',
        '  C    C',
        '   B  B',
        '    A'
];
    expect(output).toEqual(toMatch);
  });
});
