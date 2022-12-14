const Account = require('./account');
const Statement = require('./statement');

describe('transaction and statement integration', () => { 
  // different mocking example to account.test
  beforeAll(() => {
   const realDateNow = Date.now.bind(global.Date);
    const dateNowStub = jest.fn(() => new Date("2023-01-10"));
    global.Date.now = dateNowStub
})

  afterAll(() => {
  const realDateNow = Date.now.bind(global.Date);
  global.Date.now = realDateNow;
  });

  it('adds a credit to the statement', () => {
    const account = new Account();
    account.makeDeposit(1000.00)
    const statement = new Statement(account.transactions);
    expect(statement.getTransactions()).toEqual([{date: "10/01/2023", credit: 1000.00, debit: 0, balance: 1000.00}])
  })

  it('adds a two credit lines to the statement', () => {
    const account = new Account();
    account.makeDeposit(1000.00)
    account.makeDeposit(2000.00)
    const statement = new Statement(account.transactions);
    expect(statement.getTransactions()).toEqual([{date: "10/01/2023", credit: 1000.00, debit: 0, balance: 1000.00}, {date: "10/01/2023", credit: 2000.00, debit: 0, balance: 3000.00}])
  })

  it ('prints out statement with one deposit', () => { 
    const account = new Account();
    account.makeDeposit(1000.00)
    const statement = new Statement(account.transactions);
    expect(statement.getStatement()).toEqual(["date || credit || debit || balance", "10/01/2023 || 1000.00 || || 1000.00"])
  })

  it ('prints out statement for two deposits', () => { 
    const account = new Account();
    account.makeDeposit(1000.00)
    account.makeDeposit(2000.00)
    const statement = new Statement(account.transactions);
    expect(statement.getStatement()).toEqual(["date || credit || debit || balance", "10/01/2023 || 2000.00 || || 3000.00", "10/01/2023 || 1000.00 || || 1000.00"])
  })

  it ('prints a statement for deposits and a withdrawal', () => { 
    const account = new Account();
    account.makeDeposit(1000.00)
    account.makeDeposit(2000.00)
    account.makeWithdrawal(500.00)
    const statement = new Statement(account.transactions);
    expect(statement.getStatement()).toEqual(["date || credit || debit || balance", "10/01/2023 || || 500.00 || 2500.00", "10/01/2023 || 2000.00 || || 3000.00", "10/01/2023 || 1000.00 || || 1000.00"])
  })
})