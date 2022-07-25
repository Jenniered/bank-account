class BankAccount {
  constructor() {
  this.balance = 0
  }

  makeDeposit(credit) {
    this.balance += credit
  }

  getBalance() {
    return this.balance
  }
}

module.exports = BankAccount