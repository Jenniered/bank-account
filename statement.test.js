const BankAccount = require('./bank');
const Statement = require('./statement')

describe('printing a statement', () => {
  it('creates an empty statement', () => {
    const statement = new Statement();
    const account = new BankAccount();
    expect(statement.printStatement()).toEqual([])
  })
  
  xit('adds a credit to the statement', () => {
    const statement = new Statement();
    const account = new BankAccount();
    expect(statement.printStatement()).toEqual({credit: 1000, debit: nil, balance: 1000})
  })
})