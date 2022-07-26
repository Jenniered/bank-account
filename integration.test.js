const BankAccount = require('./bank');
const Statement = require('./statement')

describe('printing a statement', () => {
  it('adds a credit to the statement', () => {
    const account = new BankAccount();
    account.makeDeposit(1000)
    const statement = new Statement(account);
    expect(statement.getPrintout()).toEqual([{credit: 1000, balance: 1000}])
  })

  xit('adds a two credit lines to the statement', () => {
    const account = new BankAccount();
    account.makeDeposit(1000)
    account.makeDeposit(2000)
    const statement = new Statement(account);
    expect(statement.getPrintout()).toEqual([{credit: 1000, balance: 1000}, {credit: 2000, balance: 3000}])
  })
})