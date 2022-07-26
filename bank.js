class BankAccount {
  constructor() {
  this.balance = 0
  this.transactions = []
  }

  makeDeposit(credit, date) {
    this.credit = credit
    this.date = date
    this.debit = 0
    this.balance += this.credit
    this.logTransaction();
  }

  makeWithdrawal(debit, date) {
    this.debit = debit
    this.date = date
    this.credit = 0
    this.balance -= this.debit
    this.logTransaction();
  }

  getBalance() {
    return this.balance
  }

  logTransaction() {
    let transaction = {
      date: this.date,
      credit: this.credit,
      debit: this.debit,
      balance: this.balance
      }
    this.transactions.push(transaction);
    return transaction
  }

  mockTest() {
    return this.transactions
  }
}

module.exports = BankAccount