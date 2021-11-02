const {
    expect,
    assert
} = require('chai');
var should = require("chai").should();
const index = require('../index');
var i=0;


describe('capitalize text', () => {
    
    
    it('test that the function takes a string  it will return a string', () => {
        
        assert.isString(index.capitalizeText("hassan"));
    });

    it('test that the function takes a string and return it after capitalize it', () => {
        expect(index.capitalizeText('hassan')).to.equal("HASSAN");
    });

    it('test if the function takes number it will throw type error says parameter should be string', () => {
        expect(()=>{
        index.capitalizeText(423);
            }
        ).to.throw(TypeError,"parameter should be string");
    });

    it('test if the input hamada , the returned value  will not equal to hello', () => {
        expect(index.capitalizeText('hamada')).to.not.equal('hello');
    });


});

describe('test createArray function', () => {
    beforeEach(() => {
         i++;

    });
    it('test that the return value of type array', () => {
        assert.isArray(index.createArray(3));
    });

    it('test if we pass 3 it will return array of length 3 and test its include 1', () => {
        expect(index.createArray(3)).to.have.length(3).include(1);
    });

    it('make a variable and intialize it by 1 and before each test increase it by one and pass it to every function call', () => {
       
        // expect(index.createArray(i)).to.have.length(i);
        index.createArray(i).should.have.length(i);

    });

    it('testing function that have not intialized');
});

// setTimeout(() => {
//     run();
// }, 5000);