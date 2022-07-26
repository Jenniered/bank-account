const BankAccount = require('./bank');

class Statement {
  constructor(account) {
    this.account = account
  }

  getTransactions() {
    return this.account.transactions
  }

  getStatement() {
    let statement = this.account.transactions.map((object) => { return `${(object.date)} || ${(object.credit.toFixed(2))} || ${(object.debit.toFixed(2))} || ${(object.balance.toFixed(2))}` });
    this.reverseStatement(statement);
    this.addHeader(statement);
    return statement;
  }
  
  reverseStatement(statement) {
    statement.reverse();
  }

  addHeader(statement) {
    statement.splice(0,0,"date || credit || debit || balance");
  }
}

module.exports = Statement