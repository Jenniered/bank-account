const BankAccount = require('./bank');

class Statement {
  constructor(account) {
    this.account = account
  }

  getTransactions() {
    return this.account.transactions
  }

  getStatement() {
    return this.account.transactions.map((object) => { return `${(object.date)} || ${(object.credit) || ""} || ${(object.debit) || ""} || ${(object.balance)}` });
}

}


module.exports = Statement