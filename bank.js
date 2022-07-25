class BankAccount {
  constructor() {
  this.balance = 0
  }

  makeDeposit(credit) {
    this.credit = credit
    this.balance += this.credit
  }

  makeWithdrawal(debit) {
    this.debit = debit
    this.balance -= this.debit
  }

  getBalance() {
    return this.balance
  }

  getStatement() {
    return {
      credit: this.credit,
      debit: this.debit,
      balance: this.balance
    }
  }

}

module.exports = BankAccount