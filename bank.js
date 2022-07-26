class BankAccount {
  constructor() {
  this.balance = 0
  this.printout = []
  }

  makeDeposit(credit, date) {
    this.credit = credit
    this.date = date
    this.debit = 0
    this.balance += credit
    this.getStatement();
  }

  makeWithdrawal(debit, date) {
    this.debit = debit
    this.date = date
    this.credit = 0
    this.balance -= debit
    this.getStatement();
  }

  getBalance() {
    return this.balance
  }

  getStatement() {
    let statement = {
      date: this.date,
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

}

module.exports = BankAccount