const BankAccount = require('./bank');

class Statement {
  constructor(account) {
    this.account = account
  }

  getTransactions() {
    return this.account.transactions
  }

  formatStatement() {
    let statement = this.account.transactions.map((object) => { return `${(object.date)} || ${(object.credit.toFixed(2))} || ${(object.debit.toFixed(2))} || ${(object.balance.toFixed(2))}` });
    this.reverseStatement(statement);
    this.addHeader(statement);
    const formattedStatement = this.removeZero(statement);
    return formattedStatement;
  }

  getStatement() {
    const statementPrintout = this.formatStatement();
    return statementPrintout
  }

  reverseStatement(statement) {
    statement.reverse();
  }

  addHeader(statement) {
    statement.splice(0,0,"date || credit || debit || balance");
  }

  removeZero(statement) {
    const final = statement.map((string) => { return string.replaceAll(" 0.00 ", " ") })
    return final
  }
}

module.exports = Statement