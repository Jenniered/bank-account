const BankAccount = require('./bank');
const Statement = require('./statement')

describe('printing a statement', () => {
  it('adds a credit to the statement', () => {
    const account = new BankAccount();
    account.makeDeposit(1000, "10/01/2023")
    const statement = new Statement(account);
    expect(statement.getPrintout()).toEqual([{date: "10/01/2023", credit: 1000, balance: 1000}])
  })

  it('adds a two credit lines to the statement', () => {
    const account = new BankAccount();
    account.makeDeposit(1000, "10/01/2023")
    account.makeDeposit(2000, "13/01/2023")
    const statement = new Statement(account);
    expect(statement.getPrintout()).toEqual([{date: "10/01/2023", credit: 1000, balance: 1000}, {date: "13/01/2023", credit: 2000, balance: 3000}])
    console.log(account)
  })

  it ('prints out statement with one deposit', () => { 
    const account = new BankAccount();
    account.makeDeposit(1000, "10/01/2023")
    const statement = new Statement(account);
    expect(account.outputStatement()).toEqual(["10/01/2023 || 1000 ||  || 1000"])
  })
})