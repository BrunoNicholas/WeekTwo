// findAge.js
document.write(GetAge(birth_date.value))

function GetAge(input_date)
{
	var now = new Date()

	var years = now.getFullYear() - input_date.split('-')[0]
	var month_in = now.getMonth() - input_date.split('-')[1] + 1 //0=jan	
	
	if(month_in < 0)
	{
		--years
	}
	else if(month_in == 0)
	{
		var day_in = now.getDate() - input_date.split('-')[2]
		
		if(day_in < 0)
		{
			--years
		}
	}

	return years
}