class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  makeDeposit(credit, date) {
    credit = credit
    date = new Date(Date.now()).toLocaleString().split(",")[0]
    let debit = 0
    this.balance += credit
    this.logTransaction(credit, debit, date);
  }

  makeWithdrawal(debit, date) {
    debit = debit
    date = new Date(Date.now()).toLocaleString().split(",")[0]
    let credit = 0
    this.balance -= debit
    this.logTransaction(credit, debit, date);
  }

  getBalance() {
    return this.balance;
  }

  logTransaction(credit, debit, date) {
    let transaction = {
      date: date,
      credit: credit,
      debit: debit,
      balance: this.balance
      }
    this.transactions.push(transaction);
    return transaction;
  }

  getTransactionHistory() {
    console.log(this.transactions)
    return this.transactions
  }
}


module.exports = Account