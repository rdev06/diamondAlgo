const controller = require('../controller');

jest.mock('../service', ()=>({
    getAlphabetArray: jest.fn(function (input) {return ['A', 'B', input]}),
    algoLogic: jest.fn(function(arr){return arr}),
    printConsole: jest.fn(function(arr){return arr})
}))




describe('Testing controller Function', ()=>{
    it('Test controller driver function', ()=>{
        const data = controller('C');
        expect(data).toEqual(['A', 'B', 'C'])
    })
})