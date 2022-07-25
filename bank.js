class BankAccount {

  makeDeposit(credit) {
    this.credit = credit
  }

  getBalance() {
    if (this.credit > 0) {
      return this.credit
    }
    else {
    return 0 }
  }
}

module.exports = BankAccount