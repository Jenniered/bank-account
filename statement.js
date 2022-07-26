const BankAccount = require('./bank');

class Statement {
  constructor(account) {
    this.account = account
  }

  getPrintout() {
    return this.account.printout
  }

  getStatement() {
    return this.account.printout.map((object) => { return `${(object.date)} || ${(object.credit) || ""} || ${(object.debit) || ""} || ${(object.balance)}` });
}

}


module.exports = Statement