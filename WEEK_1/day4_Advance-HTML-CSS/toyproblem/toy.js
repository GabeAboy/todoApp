// function replaceOdd(arr) {
// 	for (var i = 0; i < arr.length; i++){
// 		if(arr[i] % 2 !== 0){
// 			console.log(arr[i])
// 			arr.splice(i,1,'a');

// 		}
// 	}
// 	return arr;
// }
// replaceOdd([1,2,3,4,5,6,7,8,9,10])

// Given an arbitrary input string, return the first non-repeated character in the string. For example:
//firstNonRepeatedCharacter('ABA'); //=> 'B'
//firstNonRepeatedCharacter('AABCABD'); // => 'C'
var str='ABA';
function firstNonRepeatedCharacter(str){
	str = str.split('');
	console.log(str);
}
firstNonRepeatedCharacter(str);

// KEEP GOING
// ==========================================
