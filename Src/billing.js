const transactionCharge = 0.025;
// This is the percentage that determines the transaction charge
var amountTendered = 100000;

console.log('This is what the billed amount is (less transaction charges);');

var billed_amount = amountTendered - (amountTendered * transactionCharge);
console.log('This is the billed amount: ' + billed_amount);
