// create a function that will make a caesar cipher - it will take in a number and a string and return a string with each letter shifted n spaces down the alphabet.

var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function caesar(num,str){
	var i,j,arr = str.split('');
	var myArray=[];
	// console.log(arr)
	for(i = 0; i < alpha; i++){
		if(alpha[i] > str.length){
			return false;
		}
		else if(arr.indexOf(alpha[i]) > -1){
			// j += alpha[i+num];
			// console.log(j)
			// myArray.push(alpha[i+num])
			// console.log(myArray)
		}
	}

}
caesar(2,'hey')
