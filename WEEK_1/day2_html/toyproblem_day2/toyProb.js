// MAKE MATH.POW A FUNCTION

var exp = Math.pow(2,3);
function exponent(base,exp) {
var total =base;
	for (var i = 1; i< exp ;i++){
		if(exp === 0){
			return 1;
		}
	 	if(i < exp){
		total *= base;
		 console.log(total);
		}
	}

	return total
}
exponent(2,3);
