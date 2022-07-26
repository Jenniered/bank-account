const BankAccount = require('./bank');
const Statement = require('./statement')

describe('transaction and statement integration', () => {
  it('adds a credit to the statement', () => {
    const account = new BankAccount();
    account.makeDeposit(1000.00, "10/01/2023")
    const statement = new Statement(account);
    expect(statement.getTransactions()).toEqual([{date: "10/01/2023", credit: 1000.00, debit: 0, balance: 1000.00}])
  })

  it('adds a two credit lines to the statement', () => {
    const account = new BankAccount();
    account.makeDeposit(1000.00, "10/01/2023")
    account.makeDeposit(2000.00, "13/01/2023")
    const statement = new Statement(account);
    expect(statement.getTransactions()).toEqual([{date: "10/01/2023", credit: 1000.00, debit: 0, balance: 1000.00}, {date: "13/01/2023", credit: 2000.00, debit: 0, balance: 3000.00}])
  })

  it ('prints out statement with one deposit', () => { 
    const account = new BankAccount();
    account.makeDeposit(1000.00, "10/01/2023")
    const statement = new Statement(account);
    expect(statement.getStatement()).toEqual(["date || credit || debit || balance", "10/01/2023 || 1000.00 || || 1000.00"])
  })

  it ('prints out statement for two deposits', () => { 
    const account = new BankAccount();
    account.makeDeposit(1000.00, "10/01/2023")
    account.makeDeposit(2000.00, "13/01/2023")
    const statement = new Statement(account);
    expect(statement.getStatement()).toEqual(["date || credit || debit || balance", "13/01/2023 || 2000.00 || || 3000.00", "10/01/2023 || 1000.00 || || 1000.00"])
  })

  it ('prints a statement for deposits and a withdrawal', () => { 
    const account = new BankAccount();
    account.makeDeposit(1000.00, "10/01/2023")
    account.makeDeposit(2000.00, "13/01/2023")
    account.makeWithdrawal(500.00, "14/01/2023")
    const statement = new Statement(account);
    expect(statement.getStatement()).toEqual(["date || credit || debit || balance", "14/01/2023 || || 500.00 || 2500.00", "13/01/2023 || 2000.00 || || 3000.00", "10/01/2023 || 1000.00 || || 1000.00"])
  })
})