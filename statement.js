const BankAccount = require('./bank');

class Statement {
  constructor(account) {
    this.account = account
  }

  getTransactions() {
    return this.account.transactions
  }

  getStatement() {
    let statement = this.account.transactions.map((object) => { return `${(object.date)} || ${(object.credit.toFixed(2)) || ""} || ${ (object.debit.toFixed(2)) || ""} || ${(object.balance.toFixed(2))}` });
    let statement_reversed = statement.reverse()
    statement_reversed.splice(0,0,"date || credit || debit || balance")
    return statement_reversed
  }
      
}

module.exports = Statement