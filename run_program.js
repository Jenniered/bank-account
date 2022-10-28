const Account = require('./account');
const Statement = require('./statement');

// to run the program
const account = new Account();
account.makeDeposit(1000.00, "10/01/2023")
account.makeDeposit(2000.00, "13/01/2023")
account.makeWithdrawal(500.00, "14/01/2023")
const statement = new Statement(account.transactions);
console.log(statement.getStatement());