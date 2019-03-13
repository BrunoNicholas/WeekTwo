/*
 * log_evens.js
 * Prime number
 * - greater than 1
 * - divisible by itself and 1
 * - the range is from 2 to any number, n
 */

console.log(findPrime(10));

// function to make a list of all prime numbers in the range
function findPrime(max_num)
{
 	primes  = [];
 	num 	= parseInt(max_num);

 	if (num >= 2) {
 		for (var i = 2; i <= num ; i++) {

 			if (isPrime(i)) { 
 				primes.push(i); 
 			}
 			
 		}
 	}
 	return primes
 }

// function to return true if prime and false if not
function isPrime(num) {
	for(var i = 2; i < num; i++)
    	if(num % i === 0) return false;
  	return num > 1;
}