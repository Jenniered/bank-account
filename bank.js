class BankAccount {
  constructor() {
  this.balance = 0
  }

  makeDeposit(credit) {
    this.balance += credit
  }

  makeWithdrawal(debit) {
    this.balance -= debit
  }

  getBalance() {
    return this.balance
  }
}

module.exports = BankAccount