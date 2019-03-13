/*
 * a loop which prompts for a number greater than 100,
 */

 console.log('Enter a number above 100: 400');

 console.log(above100(400));

 function above100(num)
 {
 	if (parseInt(num) >= 100) {
 		console.log('Correct, ' + num + ' is greater than 100');
 	}
 	else {
 		//
 		console.log('Wrong input!\nEnter a new number greater than 100!');
 		console.log('Using the input as: 105');
   
 		above100(105)
 	}
 }
