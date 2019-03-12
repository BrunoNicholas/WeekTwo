
checker();

function checker()
{
	num = prompt('Give me a number:');
	val = parseInt(num);
	if (typeof(num) === typeof(1))
	{
		alert('Abbort!\nYour user input is wrong! Enter numbers');
		checker();
	}
	else if (typeof(num) === 'string')
	{
		// 
	}
	else (true)
	{
		// 
	}
}
