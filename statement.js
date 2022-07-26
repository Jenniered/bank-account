const BankAccount = require('./bank');

class Statement {
  constructor(account) {
    this.account = account
  }

  getTransactions() {
    return this.account.transactions
  }

  getStatement() {
    return this.account.transactions.map((object) => { return `${(object.date)} || ${(object.credit.toFixed(2)) || ""} || ${ (object.debit.toFixed(2)) || ""} || ${(object.balance.toFixed(2))}` });
  }
}

module.exports = Statement