const Statement = require('./statement');
const Account = require('./account');

describe('creating a statement', () => {
  it('adds a credit to transactions', () => {
    const mockAccount = new Account();
    mockAccount.transactions = [{date: "10/01/2023", credit: 1000.00, debit: 0.00, balance: 1000.00}];
    const statement = new Statement(mockAccount);
    expect(statement.getTransactions()).toEqual([{date: "10/01/2023", credit: 1000.00, debit: 0.00, balance: 1000.00}]);
  })

  it ('prints out statement with one deposit', () => { 
    const mockAccount = new Account();
    mockAccount.transactions = [{date: "10/01/2023", credit: 1000.00, debit: 0.00, balance: 1000.00}];
    const statement = new Statement(mockAccount);
    expect(statement.getStatement()).toEqual(["date || credit || debit || balance", "10/01/2023 || 1000.00 || || 1000.00"]);
  })

  it ('prints a statement for deposit and a withdrawal', () => { 
    const mockAccount = new Account();
    mockAccount.transactions = [{date: "10/01/2023", credit: 1000.00, debit: 0.00, balance: 1000.00}, {date: "14/01/2023", credit: 0.00, debit: 500.00, balance: 500.00}];
    const statement = new Statement(mockAccount);
    expect(statement.getStatement()).toEqual(["date || credit || debit || balance", "14/01/2023 || || 500.00 || 500.00", "10/01/2023 || 1000.00 || || 1000.00"]);
  })
  it ('prints a statement with balance 0.00', () => { 
    const mockAccount = new Account();
    mockAccount.transactions = [{date: "10/01/2023", credit: 1000.00, debit: 0.00, balance: 1000.00}, {date: "14/01/2023", credit: 0.00, debit: 1000.00, balance: 0.00}];
    const statement = new Statement(mockAccount);
    expect(statement.getStatement()).toEqual(["date || credit || debit || balance", "14/01/2023 || || 1000.00 || 0.00", "10/01/2023 || 1000.00 || || 1000.00"]);
  })
})