const Statement = require('./statement')
const BankAccount = require('./bank')

describe('creating a statement', () => {

  it('adds a credit to the statement', () => {
    const mockBankAccount = new BankAccount();
    mockBankAccount.transactions = [{date: "10/01/2023", credit: 1000.00, debit: 0.00, balance: 1000.00}];
    const statement = new Statement(mockBankAccount);
    expect(statement.getTransactions()).toEqual([{date: "10/01/2023", credit: 1000.00, debit: 0, balance: 1000.00}])
  })
})