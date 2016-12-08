Write a function called ABCheck that takes a string parameter and return the string true if the characters 'a' and 'b' are separated by exactly 3 places anywhere in the string at least once (e.g. "lane borrowed" would results in true because there are exactly three characters between 'a' and 'b'). Otherwise return the string false.

function ABCheck(str) {
	var space = 3;
	str = str.split('')
	// console.log(str)
	for(var i = 0,len = str.length; i < len; i++){
		if(str[i] === 'a' && str[i + 4]=== 'b'){
			return true
		}
  }
	return false
}

console.log(ABCheck('cckkkaackkbkkaa'))
ABCheck('lane borrowed')








// Find the only item that occurs an even number of times in an array. If there is more than one item that occurs an even number of times, just return one of them. If there are no items that occur an even number of times, return null.
//var onlyEven = evenOccurrence([1,6,2,4,4,5,6,8,9,6]);
//console.log(onlyEven); // 4
//var onlyEven = evenOccurrence([1,1,3,4,1]);
//console.log(onlyEven); // null
```



















//
//
// function evens (arr) {
//   var countObj = {}
//   for (var i = 0; i < arr.length; i++) {
//     if(!countObj[arr[i]] > 0) {
//       countObj[arr[i]] = 0
//     }
//     countObj[arr[i]] = countObj[arr[i]] + 1
//   }
//   for (var a in countObj) {
//     if(countObj[a] % 2 === 0) {
//       return a
//     }
//   }
//   return null
// }
