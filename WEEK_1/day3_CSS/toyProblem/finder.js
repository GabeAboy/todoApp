// write func called finder accepts two params one str and other arr. Have func return str found in arr.

var arr = ['the','you','du',',you','walking'];
function finder(str,arr){
	var found = false;
	arr.forEach(function(elem){
		if(elem === str){
			found = true;
			return found;
		}
	});
	return found;

}

finder('du',arr);
// OBJECT & STRING FUNCTION
// ==============================================================

var person = {name:'thai',age:'26'}

function findStr(str,obj) {
	var found = false;
	for(var key in obj){
		console.log(obj[key]);
		if(obj[key] === str){
			found = true;
			return found;
		}
	}
	return found;
}

findStr('thai',person)
