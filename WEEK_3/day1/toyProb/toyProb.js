//function that takes a string with parens, brackets, braces, carrot({[]})<> checks to see if they close
//"(string{string})" --true // "([string]}" -- false



// DID NOT GET THE ANSWER YET
// ===================================
function check(str){
str = str.split('');
var myArray = [];
console.log(str)
	if(str.indexOf('{')>-1){
	for (var i = str.indexOf('{');i<str.length;i++){
		if(str[i]!=='}'){
			console.log(false);

		}
	}
		return false
	} else if(str.indexOf('[')>-1){
	for (i = str.indexOf('[');i<str.length;i++){
		if(str[i]!==']'){
			console.log(str.indexOf('['));

		}
	}
		return false
	} else if(str.indexOf('(')>-1){
	for (i = str.indexOf('(');i<str.length;i++){
		if(str[i]!==')'){
			console.log(false);

		}
	}
		return false;
	} else if(str.indexOf('<')>-1){
	for (i = str.indexOf('<');i<str.length;i++){
		if(str[i]!=='>'){
			console.log(false);

		}
	}
		return false
	}

}
check("(string{string})");
// check("([string]}");


// if(str.indexOf('{')>-1){
	// 	console.log(true);
	// 	for(var i = 0;i<str.length)
	// } else if(str.indexOf('[')>-1){
	// 	console.log('[ contains');
	// }else if(str.indexOf('[')>-1){
	// 	console.log('< contains');
	// }



	function check(str){
str = str.split('');
var myArray = [];
for (var i = 0; i < str.length;i++){
	for (var j = i; j < str.length; j++){
		// console.log(str[j])
		if(str[i] === '{' && str[j] === '}'){
			console.log(str[i])
			console.log(str[j])
		}
	}
}

}
check("(string{string})");
