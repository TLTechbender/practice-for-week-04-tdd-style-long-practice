// Your code here
const {expect} = require("chai");
const {returnsThree}= require("../problems/number-fun.js");
const {reciprocal}= require("../problems/number-fun.js");


describe('returnsThree', function () {

  it('returns three', function () {
      const three = returnsThree();
      expect(three).to.equal(3);
    });
});


// It was at this point that a fella knew he needed help
describe('reciprocal', function() {

  context('when number is less than 1 and more than 1,000,000', ()=>  {

      it('throws an error', function () {
            expect(() => reciprocal(0.05)).to.throw(TypeError, 'range');
            expect(() => reciprocal(2000000)).to.throw(TypeError, 'range');
            expect(() => reciprocal(0.1)).to.throw(TypeError, 'range');
          });


    });

  context('when number is between 1 and 1,000,000', function () {

      it('returns the reciprocal of the number', function () {
            const rep1 = reciprocal(4);
            const rep2 = reciprocal(5);
            
	      expect(rep1).to.equal(0.25);
            expect(rep2).to.equal(0.20);
            
          });


    });
});

