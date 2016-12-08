// METHOD 2
// ========================================
function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
     (function newScope() {
     	var num = i;
     	console.log(num)
    		setTimeout(function() {
      		console.log(num);
    			}, i * 1000)


  	})()
  }


}
timeOutCounter();


// METHOD 1
// ==================================================
/******************************************************************************\
	#PROBLEM-07
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 7 ******/
/* Here we have a for loop that will iterate as long as i is less than or equal
to 5. What we need to do is console.log(i) so that it logs ( 0 then 1 then 2
then 3, etc). Run this code in your console to see what the output is. */

// To make this code work you will need to create a new scope for every iteration.
function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
// Variables declared by let have as their scope the block in which they are defined, as well as in any contained sub-blocks
    let j = i
    setTimeout(function() {
      console.log(j);

    }, i * 1000)}

  function newScope(i) {
    console.log(j)
  }
}
timeOutCounter();
