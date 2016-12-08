Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
doubleChar("String") ==> "SSttrriinngg"
doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
doubleChar("1234!_ ") ==> "11223344!!__  "


function doubleChar(str) {
	var myArray = [];
	str = str.split('');
	console.log(str)
	str.forEach(function(item){
		item = item + item
		// console.log(item)
		myArray.push(item)
		// console.log(myArray.join(''))
		return myArray
	})
	return myArray.join('')

}

doubleChar('')
// doubleChar("String") ==> "SSttrriinngg"



Given a two-dimensional array of integers, return the flattened version of the array
with all the integers in the sorted (ascending) order.
Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].


function flattened(arr){
	var myArray = [];
	arr.forEach(function(item,index){
		myArray = myArray.concat(item).sort();
	})

    console.log(myArray)
    return myArray

}
