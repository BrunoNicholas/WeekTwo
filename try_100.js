/*
 * a loop which prompts for a number greater than 100,
 */

 console.log('Enter a number above 100');

 var n = 95;

 while(n < 105)
 {
 	console.log(above100(n));
 	++n;
 }

 // console.log(above100(400));

 function above100(num)
 {
 	if (parseInt(num) >= 100 && parseInt(num) != 100) {
 		return ('\nYou\'re Correct, ' + num + ' is greater than 100');
 	}
 	else if (parseInt(num) == 100) {
 		return ('\nWow - You\'re Correct, ' + num + ' is equal to 100');
 	}
 	else {
   		return ('\nWrong input with '+ num +'! \nEnter a new number greater than 100!\nEntering new number:');
 	}
 }
