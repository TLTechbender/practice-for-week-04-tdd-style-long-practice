
function reverseString(word){

  if(typeof word !="string"){

    throw new TypeError("Input must be a string");
  }
	let step1 = word.split("");
let step2= step1.reverse();

	return step2.join("");


}




module.exports = reverseString;

