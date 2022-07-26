const BankAccount = require('./bank');

class Statement {
  constructor(account) {
    this.account = account
  }

  getPrintout() {
    return this.account.printout
  }

}


module.exports = Statement