// Your code here
//
const chai = require("chai");
const expect = chai.expect;

const reverseString = require("../problems/reverse-string.js");

describe("reverseString(word)",()=>{
it("should return the reverse of the inputed string", ()=>{
const wordTest= "fun";
 const answer= reverseString(wordTest);
	expect(answer).to.equal("nuf");
})


/*I needed help for this one, the previous erros I've been handling in the last module don'r require me to write tests*/

it("Error input is not a string", ()=>{
    expect(()=> reverseString(42)).to.throw(TypeError, "Input", "string");  
})
});

