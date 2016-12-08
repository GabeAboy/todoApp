//Build a bank constructor Function
//It needs an account number, and owner name, and a balance.
//Give it methods to add and withdraw from the balance
//Give it a method to log the remaining balance for the owner name
//Make 2 accounts and manipulate their balances.

function Bank(accountNumber,ownerName,balance) {
	this.accountNumber = accountNumber;
	this.ownerName = ownerName;
	this.balance = balance;
}

Bank.prototype.add = function(num) {
	this.balance += num;
}
Bank.prototype.withdraw = function(num) {
	this.balance -= num;
}
Bank.prototype.log = function() {
	console.log('your balance is currently: $'+ this.balance + ' for the account owner of : ' +  this.ownerName +' time: ' + new Date());
}

var Thai = new Bank(1130, 'Thai', 0);
Thai.add(10);
Thai.log()
Thai.withdraw(200)
Thai.log()
Thai.add(1130)
Thai.log()

var Chipi = new Bank('22', 'Chipi', 0)
Chipi.add(5000)
Chipi.withdraw(500)
Chipi.log()
