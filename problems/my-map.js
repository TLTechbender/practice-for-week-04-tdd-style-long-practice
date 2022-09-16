function myMap(inputArray, callback) {
  // Your code here
	let answer= [];
   inputArray.forEach((ele)=>{
     let newEl = callback(ele);
    answer.push(newEl);
   });
return answer;
}

module.exports = myMap;
