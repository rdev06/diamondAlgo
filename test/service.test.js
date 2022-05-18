const service = require('../service');

describe('Get Alphabet Array', ()=>{
    it('When there is no input', ()=>{
        expect(service.getAlphabetArray).toThrow('Input is required')
    })
    it('When there is Invalid input', ()=>{
        expect(() => service.getAlphabetArray('&')).toThrow('Invalid Input')
    })
    it('When there is input A', ()=>{
        expect(service.getAlphabetArray('A')).toHaveLength(1)
    })
    it('When there is input D', ()=>{
        expect(service.getAlphabetArray('D')).toHaveLength(4)
    })
})