// create a function that takes an array of objects as an argument and a string that represents a property of an object contained in the array and returns an object whose keys are the properties and whose values are arrays of objects that match that property.
//
//
//
// {
//   '49ers': ['Joe Montana', 'Jerry Rice', 'Steve Young'],
//   'Cowboys': ['Tony Romo', 'Emmitt Smith'],
//   ....etc
// }

var arr = [
    {name: 'Joe Montana', team: '49ers'},
    {name: 'Jerry Rice', team: '49ers'},
    {name: 'Steve Young', team: '49ers'},
    {name: 'Tony Romo', team: 'Cowboys'},
    {name: 'Fred Biletnikoff', team: 'Raiders'},
    {name: 'Dick Butkus', team: 'Bears'},
    {name: 'Emmitt Smith', team: 'Cowboys'},
];

function find(arr,str) {
	var myArray = [];
	arr.forEach(function(item){
		if(item.team === str){
			myArray.push(item.name)
		// 	console.log(myArray)
			return myArray;
		}
		console.log(item.team)
	})
	return myArray

}
find(arr,'49ers')
find(arr,'49ers')


// Triple Trouble
// Create a function that will return a string that combines
// all of the letters of the three inputed strings in groups.
// Taking the first letter of all of the inputs and grouping
// them next to each other. Do this for every letter, see example below!
// Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"
// Note: You can expect all of the inputs to be the same length.
// function tripleTrouble(one, two, three){
//   //Code Here
// }
// tripleTrouble("Bm", "aa", "tn");
// tripleTrouble("LLh","euo","xtr");
function tripleTrouble(str1,str2,str3) {
	var myArray = [];

	myArray.push(str1,str2,str3)
	console.log(myArray)
	myArray.forEach(function(item,index){               //<========not completed
		item = item.split('')
		console.log(item, index)
	})
}
tripleTrouble('Bm','aa','tn')
