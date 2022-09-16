function returnsThree() {
  // Your code here
	return 3;
}

function reciprocal(n) {
  // Your code here
 const error = new TypeError("number is out of allowable range(1-1,000,000)"); // I'm still yet to fully understand this thing but with lots more practice I would...................

	if(n<1 || n>1000000){
	throw error
	};
let answer= 1/n;
	return answer;
}

module.exports = {
  returnsThree,
  reciprocal
};
