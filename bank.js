class BankAccount {
  constructor() {
  this.balance = 0
  }

  makeDeposit(credit) {
    this.credit = credit
    this.balance += this.credit
  }

  makeWithdrawal(debit) {
    this.balance -= debit
  }

  getBalance() {
    return this.balance
  }

  getStatement() {
    return {
      credit: this.credit,
      balance: this.balance
    }
  }

}

module.exports = BankAccount