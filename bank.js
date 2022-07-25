class BankAccount {
  constructor() {
  this.balance = 0
  this.printout = []
  }

  makeDeposit(credit) {
    this.credit = credit
    this.debit = 0
    this.balance += credit
    this.getStatement();
  }

  makeWithdrawal(debit) {
    this.debit = debit
    this.credit = 0
    this.balance -= debit
    this.getStatement();
  }

  getBalance() {
    return this.balance
  }

  getStatement() {
    let statement = {
      credit: this.credit,
      debit: this.debit,
      balance: this.balance
      }
    this.printout.push(statement);
    // return statement
    return Object.keys(statement).reduce((v, k) => (!statement[k] && delete v[k], v), statement)
  }

  printStatement() {
    return this.printout;
  }

  outputStatement() {
    // let print = ""
      return this.printout.map((object) => { return `|| ${(object.credit)} || || ${(object.balance)}` });
  }
}

module.exports = BankAccount