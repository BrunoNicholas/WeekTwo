
checker();

function checker()
{
	// num = prompt('Give me a number:');
	num = 455;

	val = parseInt(num);
	if (val != NaN)
	{
		// alert('Correct! Enter numbers');
		if (val >= 1) {
			console.log('The number ' + val + ' is greater than 1');
		}
		else if (val <0 ) {
			console.log('Wow, you have entered a Zero! Hahaha!');
		}
		else if (val < 0) {
			console.log('You have entered a zero');
		}

	}
	else if (val === NaN && typeof(num) != 'number')
	{
		// alert('Abbort no strings!\nYour user input is wrong! Enter numbers');
		checker();
	}
	else
	{
		// 
	}
}
