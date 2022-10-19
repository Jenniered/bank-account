const Account = require('./account');

class Statement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  getTransactions() {
    return this.transactions;
  }

  formatStatement() {
    let statement = this.transactions.map((object) => { return `${(object.date)} || ${(object.credit.toFixed(2))} || ${(object.debit.toFixed(2))} || ${(object.balance.toFixed(2))}` });
    this.reverseStatement(statement);
    this.addHeader(statement);
    const formattedStatement = this.removeZero(statement);
    return formattedStatement;
  }

  getStatement() {
    const statementPrintout = this.formatStatement();
    return statementPrintout;
  }

  reverseStatement(statement) {
    statement.reverse();
  }

  addHeader(statement) {
    statement.splice(0,0,"date || credit || debit || balance");
  }

  removeZero(statement) {
    const final = statement.map((string) => { return string.replaceAll(" 0.00 ", " ") })
    return final;
  }
}

module.exports = Statement

// to run the program
// const account = new Account();
// account.makeDeposit(1000.00, "10/01/2023")
// account.makeDeposit(2000.00, "13/01/2023")
// account.makeWithdrawal(500.00, "14/01/2023")
// const statement = new Statement(account);
// console.log(statement.getStatement());